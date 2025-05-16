import genDiff from "../src/genDiff";
import { parsersFile, parseTwoFiles}  from "../src/parsers.js";
import { test, expect} from '@jest/globals'

test('genDiff', () => {
  const [file1, file2] = parseTwoFiles('file1.yaml', 'file2.yaml');
  const result = parsersFile('result1.txt')
  expect(genDiff(file1, file2)).toEqual(result);
})

test('genDiff with different data types', () => {
  const [file3, file4] = parseTwoFiles('file3.json', 'file4.json');
  const result = parsersFile('result2.txt')
    expect(genDiff(file3, file4)).toEqual(result)
})

test('get relativePath', () => {
  const relativePath = './__fixtures__/file2.json'
  const file1 = parsersFile('file2.json')
  expect(file1).toEqual(parsersFile(relativePath))
})

test('genDiff with empty objects', () => {
    expect(genDiff({}, {})).toEqual('{\n}')
})

