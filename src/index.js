#!/usr/bin/env node

import { Command } from "commander";
import { parsersTwoFiles } from "./parsers.js"
import { genDiff } from "./genDiff.js";
 
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .argument('<filePath1>', 'path to first file')
    .argument('<filePath2>', 'path to second file')
    .option('-f, --format <type>', 'output format', 'stylish')
    .action((filePath1, filePath2, options) => {
        try {
            if(!filePath1 || !filePath2) {
                throw new Error('The path to the file was not specified')
            }
            const [data1, data2] = parsersTwoFiles(filePath1, filePath2);
            const result = genDiff(data1, data2, options);
            console.log(result)
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    })

program.parse()
