import genDiff from "../src/genDiff";
import parseTwoFiles  from "../src/parse";

test('genDiff', () => {
    const [file1, file2] = parseTwoFiles('file1.json', 'file2.json');
    const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`
    expect(genDiff(file1, file2)).toEqual(result);
})

test('genDiff with empty objects', () => {
    expect(genDiff({}, {})).toEqual('{\n}')
})

test('genDiff with different data types', () => {
    const [file3, file4] = parseTwoFiles('file3.json', 'file4.json');
    const result = `{
  - age: 39
  + age: 39
  + id: 02145
    name: Reyes
}`
    expect(genDiff(file3, file4)).toEqual(result)
})