import * as Yup from "yup"

export default function createYupSchema (fields) {
  let schema = {}
  
  fields.forEach(field => {

    let validator

    switch (field.__component) {
      case 'inputs.string': validator = Yup.string(); break
      case 'inputs.number': validator = Yup.number(); break
      case 'inputs.select': validator = field.isMultiple ? Yup.array() : Yup.string(); break
      case 'inputs.file': validator = Yup.array(); break
    }

    if (field.minNumberOfCharacters) validator = validator.min(field.minNumberOfCharacters, `Минимальное количество символов ${field.minNumberOfCharacters}`)
    if (field.maxNumberOfCharacters) validator = validator.max(field.maxNumberOfCharacters, `Минимальное количество символов ${field.maxNumberOfCharacters}`)
    if (field.regExp) validator = validator.matches(`${field.regExp}`, 'Введите корректное значение')
    if (field.isRequired) validator = (field.__component !== 'inputs.select' && field.__component !== 'inputs.file') ? validator.required('Обязательное поле') : validator.min(1, 'Обязательное поле')
    
    schema[field.bitrixKey] = validator

  })

  return Yup.object().shape(schema)
}