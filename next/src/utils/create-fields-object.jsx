export default function createFieldObject (inputs) {

  let fields = {}
  let filesKey = []

  inputs.forEach((item) => {

    switch (item.__component) {
      case 'inputs.select': fields[item.bitrixKey] = item.isMultiple ? [] : ''; break
      case 'inputs.file': fields[item.bitrixKey] = []; filesKey.push(item.bitrixKey); break
      default: fields[item.bitrixKey] = ''; break
    }

  })

  return { fields, filesKey }
}