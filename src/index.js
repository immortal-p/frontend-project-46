#!/usr/bin/env node

import { Command } from "commander";
import { parsersTwoFiles } from "./parsers.js"
import { genDiff } from "./genDiff.js";
 
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format', 'stylish')
    .argument('<filePath1>', 'path to first file')
    .argument('<filePath2>', 'path to second file')
    .action((filePath1, filePath2, options) => {
        const [data1, data2] = parsersTwoFiles(filePath1, filePath2);
        const formatName = options.format;
        const diff = genDiff(data1, data2, formatName);
        console.log(diff);
    })

program.parse()
