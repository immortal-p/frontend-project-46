import _ from 'lodash'

const INDENT_SIZE = 2

const getIndent = (depth) => ' '.repeat(depth * INDENT_SIZE)

const stringifyPrimitive = (value) => {

  if (_.isNull(value)) return 'null'
  if (_.isString(value)) return `"${value}"`
  return String(value)

}

const stringify = (data, depth = 0) => {

  const indent = getIndent(depth)
  const closingIndent = getIndent(depth + 1)

  if (!_.isObject(data) || _.isNull(data)) {

    return stringifyPrimitive(data)

  }
  if (_.isArray(data)) {

    if (data.length === 0) return '[]'

    const items = data.map((item) => {

      return closingIndent + stringify(item, depth + 1)

    })

    return `[\n${items.join(',\n')}\n${indent}]`

  }

  const entries = Object.entries(data)
  if (entries.length === 0) return '{}'

  const lines = entries.map(([key, value]) => {

    const stringValue = _.isObject(value) ? stringify(value, depth + 1) : stringifyPrimitive(value)
    return `${closingIndent}"${key}": ${stringValue}`

  })

  return `{\n${lines.join(',\n')}\n${indent}}`

}

export default stringify
