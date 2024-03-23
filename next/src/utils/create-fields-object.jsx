export default function CreateFieldObject (inputs) {

  let obj = {}

  inputs.forEach((item) => {

    switch (item.__component) {
      case 'inputs.select': obj[item.label] = item.isMultiple ? [] : ''
      default: obj[item.bitrixKey] = ''
    }

  })

  return obj
}