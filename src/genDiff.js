import { parsersTwoFiles } from './parsers.js';
import format from './formatters/index.js';
import buildDiff from './genDiff-core.js';

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
    const [data1, data2] = parsersTwoFiles(filePath1, filePath2);
    const diff = buildDiff(data1, data2);
    return format(diff, formatName);
}

export default genDiff