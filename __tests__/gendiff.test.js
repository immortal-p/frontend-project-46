import buildDiff from '../src/genDiff-core.js'
import genDiff from '../src/genDiff.js'
import { parsersFile } from '../src/parsers.js'
import { test, expect, describe } from '@jest/globals'

describe('diff generator', () => {
  describe('buildDiff', () => {
    test('should detect changed values', () => {
      const obj1 = { a: 1 }
      const obj2 = { a: 2 }
      expect(buildDiff(obj1, obj2)).toEqual([
        { key: 'a', type: 'changed', oldValue: 1, newValue: 2 },
      ])
    })

    test('should handle indentical objects', () => {
      const obj = { key: 'value' }
      expect(buildDiff(obj, obj)).toEqual([
        { key: 'key', type: 'unchanged', value: 'value' },
      ])
    })

    test('should return empty array for empty objects', () => {
      expect(buildDiff({}, {})).toEqual([])
    })

    test('should detect nested changes', () => {
      const obj1 = { a: { b: 1 } }
      const obj2 = { a: { b: 2 } }
      expect(buildDiff(obj1, obj2)).toEqual([
        {
          key: 'a',
          type: 'nested',
          children: [
            { key: 'b', type: 'changed', oldValue: 1, newValue: 2 },
          ],
        },
      ])
    })
  })

  describe('genDiff', () => {
    test('should use stylish as default format', () => {
      const result = genDiff('file1.json', 'file2.json')
      expect(result).toEqual(parsersFile('resultStylish.txt'))
    })

    test('should throw error for invalid format', () => {
      expect(() => genDiff('file1.json', 'file2.json', 'invalidFormat')).toThrow()
    })
  })

  describe('File Parsing', () => {
    test('should handle relative paths', () => {
      const relativePath = './__fixtures__/file2.yaml'
      expect(parsersFile('file2.yaml')).toEqual(parsersFile(relativePath))
    })

    test('should throw for unsupported file types', () => {
      expect(() => parsersFile('invalid.xml')).toThrow()
    })
  })
})
