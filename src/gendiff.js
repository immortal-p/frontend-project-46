#!/usr/bin/env node

import { Command } from "commander";
import parseTwoFiles from "../src/parse.js"

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format [type]', 'output format')
    .argument('<filePath1>', 'path to first file')
    .argument('<filePath2>', 'path to second file')
    .action((filePath1, filePath2) => {
        const [data1, data2] = parseTwoFiles(filePath1, filePath2);
        console.log(data1);
        console.log(data2)
    })
program.parse()