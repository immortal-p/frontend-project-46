import formatPlain from "./plain.js";
import formatStylish from "./stylish.js";

const formatters = {
    stylish: formatStylish,
    plain: formatPlain,
}

const format = (diff, formatName = 'stylish') => {
    const formatter = formatters[formatName];
    if(!formatter){
        throw new Error(`Unknown format: ${formatName}`);
    }
    return formatter(diff);
};

export default format