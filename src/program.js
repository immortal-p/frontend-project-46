import { Command } from 'commander';
import genDiff from './genDiff.js';
 
const program = () => {
  const program = new Command();

  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format', 'stylish')
    .argument('<filePath1>', 'path to first file')
    .argument('<filePath2>', 'path to second file')
    .action((filePath1, filePath2, options) => {
      console.log(genDiff(filePath1, filePath2, options.format));
      return genDiff(filePath1, filePath2, options.format);
    });

  return program;
};

export default program;