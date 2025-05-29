import _ from 'lodash'

const formatValue = (value) => {
  if (value === null) return 'null'
  if (_.isObject(value)) return '[complex value]'
  if (typeof value === 'string') return `'${value}'`
  return String(value)
}

const formatPlain = (diff, parentPath = '') => {
  const lines = diff.map(data => {
    const currentPath = parentPath ? `${parentPath}.${data.key}` : data.key

    switch (data.type) {
      case 'added':
        return `Property '${currentPath}' was added with value: ${formatValue(data.value)}`
      case 'removed':
        return `Property '${currentPath}' was removed`
      case 'changed':
        return `Property '${currentPath}' was updated. From ${formatValue(data.oldValue)} to ${formatValue(data.newValue)}`
      case 'nested':
        return formatPlain(data.children, currentPath)
      case 'unchanged':
        return null
      default:
        throw new Error(`Unknown type: ${data.type}`)
    }
  })
  return lines.filter(line => line !== null).join('\n')
}

export default formatPlain