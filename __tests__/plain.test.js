import formatPlain from '../src/formatters/plain.js'
import buildDiff from '../src/genDiff-core.js'
import { parsersFile, parsersTwoFiles } from '../src/parsers.js'
import { test, expect } from '@jest/globals'

test('formatPlain', () => {
  const [file1, file2] = parsersTwoFiles('file1.json', 'file2.json')
  const result = parsersFile('resultPlain.txt')
  const diff = buildDiff(file1, file2)
  expect(formatPlain(diff)).toEqual(result)
})

test('thrwos error on node type', () => {
  const diff = [{ key: 'someKey', type: 'clear', value: 'val' }]
  expect(() => formatPlain(diff)).toThrow()
})
