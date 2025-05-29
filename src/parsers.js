import path from 'path'
import fs from 'fs'
import yaml from 'yaml'
import process from 'process'

const FORMATS = {
  '.json': content => JSON.parse(content),
  '.yaml': content => yaml.parse(content),
  '.yml': content => yaml.parse(content),
  '.txt': content => content,
}

const getPath = filePath => {
  const fixturesPath = path.resolve(process.cwd(), '__fixtures__', filePath)
  if (fs.existsSync(fixturesPath)) return fixturesPath
  return path.resolve(process.cwd(), filePath)
}

const parsersFile = filePath => {
  const absolutePath = getPath(filePath)
  const ext = path.extname(absolutePath).toLowerCase()
  const content = fs.readFileSync(absolutePath, 'utf-8')
  return FORMATS[ext](content)
}

const parsersTwoFiles = (file1, file2) => {
  return [
    parsersFile(file1),
    parsersFile(file2),
  ]
}

export { parsersFile, parsersTwoFiles }
