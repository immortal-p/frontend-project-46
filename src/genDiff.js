const genDiff = (data1, data2) => {
    const allKeys = [...new Set([
        ...Object.keys(data1),
        ...Object.keys(data2)
    ])].sort((a, b) => a.localeCompare(b));

    let result = '';

    allKeys.forEach(key => {
        const val1 = data1[key];
        const val2 = data2[key];
        
        const isEqual = val1 === val2;
        if(isEqual){
            result += `    ${key}: ${val1}\n`
        }else{
            if(val1 !== undefined) result += `  - ${key}: ${val1}\n`
            if(val2 !== undefined) result += `  + ${key}: ${val2}\n`   
        }
    });

    return `{\n${result}}`;
}

export default genDiff