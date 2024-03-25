export default function createFieldObject (inputs) {

  let obj = {}

  inputs.forEach((item) => {

    switch (item.__component) {
    
      case 'inputs.select': obj[item.bitrixKey] = item.isMultiple ? [] : ''; break
      default: obj[item.bitrixKey] = ''
    }

  })

  return obj
}