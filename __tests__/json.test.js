import { test, expect, describe } from '@jest/globals'
import stringify from '../src/formatters/jsonFormatter.js'

describe('JSON Formatter', () => {

  test('should format empty object', () => {

    expect(stringify({})).toEqual('{}')

  })

  test('should format empty array', () => {

    expect(stringify([])).toEqual('[]')

  })

  test('should format primitive values', () => {

    expect(stringify('text')).toEqual('"text"')
    expect(stringify(444)).toEqual('444')
    expect(stringify(null)).toEqual('null')

  })

})

describe('Complex structures formatting', () => {

  test('should format nested objects', () => {

    const data = { key1: { key2: { key3: 333 } } }
    expect(stringify(data)).toEqual(JSON.stringify(data, null, 2))

  })

  test('should format arrays with objects', () => {

    const data = [{ key1: 23 }, { key2: 44 }]
    expect(stringify(data)).toEqual(JSON.stringify(data, null, 2))

  })

})
