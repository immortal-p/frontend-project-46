import { buildDiff, genDiff } from "../src/genDiff";
import { parsersFile, parsersTwoFiles}  from "../src/parsers.js";
import { test, expect } from "@jest/globals"


test('genDiff', () => {
  const [file1, file2] = parsersTwoFiles('file1.json', 'file2.json');
  const correctResult = parsersFile('result.txt');
  expect(genDiff(file1, file2)).toEqual(correctResult);
});

test('get relativePath', () => {
  const relativePath = './__fixtures__/file2.yaml'
  const file1 = parsersFile('file2.yaml')
  expect(file1).toEqual(parsersFile(relativePath))
})

test('throws error on type', () => {
  const [file1, file2] = parsersTwoFiles('file1.yaml', 'file2.yaml');
  expect(() => genDiff(file1, file2, 'formatJson')).toThrow();
})

test('buildDiff basic case', () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 2 };
  const result = buildDiff(obj1, obj2);
  expect(result).toEqual([
    { key: 'a', type: 'changed', oldValue: 1, newValue: 2 }
  ]);
});

test('buildDiff with identical objects', () => {
  const obj = { key: 'value' };
  expect(buildDiff(obj, obj)).toEqual([{ key: 'key', type: 'unchanged', value: 'value' }]);
})

test('buildDiff wiht empty objects', () => {
  expect(buildDiff({}, {})).toEqual([])
})