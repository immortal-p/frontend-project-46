import formatStylish from "../src/stylish";
import { test, expect } from "@jest/globals";

test('formatStylish with added key', () => {
  const tree = [{ key: 'host', type: 'added', value: 'hexlet.io' }];
  expect(formatStylish(tree)).toBe('{\n  + host: hexlet.io\n}');
});

test('formatStylish with removed key', () => {
  const tree = [{ key: 'timeout', type: 'removed', value: 50 }];
  expect(formatStylish(tree)).toBe('{\n  - timeout: 50\n}');
});

test('formatStylish with changed key', () => {
  const tree = [{
    key: 'timeout',
    type: 'changed',
    oldValue: 50,
    newValue: 20
  }];
  expect(formatStylish(tree)).toBe('{\n  - timeout: 50\n  + timeout: 20\n}');
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