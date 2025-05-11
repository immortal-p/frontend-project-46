#!/usr/bin/env node

import { Command } from "commander";
import parseTwoFiles from "../src/parse.js"

const program = new Command();

const genDiff = (data1, data2) => {
    const allKeys = [...new Set([
        ...Object.keys(data1),
        ...Object.keys(data2)
    ])].sort();

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

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format [type]', 'output format')
    .argument('<filePath1>', 'path to first file')
    .argument('<filePath2>', 'path to second file')
    .action((filePath1, filePath2) => {
        const [data1, data2] = parseTwoFiles(filePath1, filePath2);
        console.log(genDiff(data1, data2))
    })
program.parse()