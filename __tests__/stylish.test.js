import formatStylish from "../src/formatters/stylish.js";
import { compare } from "../src/compare.js";
import { parsersFile, parsersTwoFiles } from "../src/parsers.js";
import { test, expect } from "@jest/globals";

test('formatStylish', () => {
  const [data1, data2] = parsersTwoFiles('file1.yaml', 'file2.json');
  const result = parsersFile('resultStylish.txt');
  expect(compare(data1, data2)).toEqual(result)
})

test('formatStylish with added key', () => {
  const tree = [{ key: 'host', type: 'added', value: 'hexlet.io' }];
  expect(formatStylish(tree)).toBe('{\n  + host: hexlet.io\n}');
});

test('formatStylish with removed key', () => {
  const tree = [{ key: 'timeout', type: 'removed', value: 50 }];
  expect(formatStylish(tree)).toBe('{\n  - timeout: 50\n}');
});

test('formatStylish with nested structure', () => {
  const tree = [
    {
      key: 'proxy',
      type: 'nested',
      children: [
        { key: 'enabled', type: 'added', value: true }
      ]
    }
  ];
  expect(formatStylish(tree)).toBe('{\n    proxy: {\n      + enabled: true\n    }\n}');
});

test('throws error on node type', () => {
    const diff = [ { key: 'someKey', type: 'nova_type', value: 'val'}, ];
    expect(() => formatStylish(diff)).toThrow()
})