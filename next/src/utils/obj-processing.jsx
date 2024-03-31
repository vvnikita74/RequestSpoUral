export function extractFiles (valuesObj, filesKey) {
  const filesObj = {}
  for (let i = 0; i < filesKey.length; i++) {
    const item = filesKey[i]
    filesObj[item] = valuesObj[item]
    delete valuesObj[item]
  }
  return filesObj
}