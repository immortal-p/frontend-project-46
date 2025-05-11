#!/usr/bin/env node

import { Command } from "commander";
import parseTwoFiles from "../src/parse.js"
import _ from 'lodash'

const program = new Command();

const genDiff = (data1, data2) => {
    const allKeys = [...new Set([
        ...Object.keys(data1),
        ...Object.keys(data2)
    ])].sort();

    let result = '';

    allKeys.forEach(key => {
        const data1Val = data1[key];
        const data2Val = data2[key];

        const isEqual = JSON.stringify(data1Val) === JSON.stringify(data2Val);
        if(isEqual){
            result += `    ${key}: ${JSON.stringify(data1Val)}\n`
        }else{
            if(data1Val !== undefined){
                result += `  - ${key}: ${JSON.stringify(data1Val)}\n`
            }
            if(data2Val !== undefined) {
                result += `  + ${key}: ${JSON.stringify(data2Val)}\n`
            }
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