import formatPlain from './plain.js'
import formatStylish from './stylish.js'
import stringify from './jsonFormatter.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: stringify,
}

const format = (diff, formatName = 'stylish') => {
  const formatter = formatters[formatName]
  if (!formatter) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formatter(diff)
}

export default format