import path from 'path';
import fs from 'fs';
import yaml from 'yaml';

const FORMATS = {
  '.json': (content) => JSON.parse(content),
  '.yaml': (content) => yaml.parse(content),
  '.txt' : (content) => content,
};

const getPath = (filePath) => {
  if(path.isAbsolute(filePath)) return filePath;

  const fixturesPath = path.resolve(process.cwd(), '__fixtures__', filePath);
  if(fs.existsSync(fixturesPath)) return fixturesPath;

  return path.resolve(process.cwd( ), filePath);
}

const parseFile  = (filePath) => {
  const absolutePath = getPath(filePath);
  const ext = path.extname(absolutePath).toLowerCase();
  const content = fs.readFileSync(absolutePath, 'utf-8');
  return FORMATS[ext](content);
}

const parseTwoFiles = (file1, file2) => {
  return [
    parseFile(file1),
    parseFile(file2),
  ]
}

export default parseTwoFiles;