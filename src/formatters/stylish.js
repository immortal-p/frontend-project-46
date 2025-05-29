import _ from 'lodash'

const INDENT_SIZE = 4

const getIndent = (depth) => ' '.repeat(depth * INDENT_SIZE - 2)
const getBracketIndent = (depth) => ' '.repeat((depth - 1) * INDENT_SIZE)

const formatValue = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value)
  };

  const indent = getIndent(depth + 1)
  const closingIndent = getBracketIndent(depth + 1)

  const keys = Object.keys(value)
  const lines = keys.map((key) => {
    return `${indent}  ${key}: ${formatValue(value[key], depth + 1)}`
  })

  return `{\n${lines.join('\n')}\n${closingIndent}}`
}

const formatData = (data, depth) => {
  const indent = getIndent(depth)
  const { key } = data

  switch (data.type) {
    case 'added':
      return `${indent}+ ${key}: ${formatValue(data.value, depth)}`

    case 'removed':
      return `${indent}- ${key}: ${formatValue(data.value, depth)}`

    case 'unchanged':
      return `${indent}  ${key}: ${formatValue(data.value, depth)}`

    case 'changed':
      return [
        `${indent}- ${key}: ${formatValue(data.oldValue, depth)}`,
        `${indent}+ ${key}: ${formatValue(data.newValue, depth)}`,
      ]

    case 'nested':
      return `${indent}  ${key}: ${formatStylish(data.children, depth + 1)}`

    default:
      throw new Error(`Unknown type: ${data.type}`)
  }
}

const formatStylish = (tree, depth = 1) => {
  const lines = tree.flatMap((data) => formatData(data, depth))
  const closingIndent = getBracketIndent(depth)
  return `{\n${lines.join('\n')}\n${closingIndent}}`
}

export default formatStylish