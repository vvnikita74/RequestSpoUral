export default function Select ({input, formik}) {
  
  if (!Array.isArray(input.values)) return


  const handleChoice = (item) => {

    if (input.isMultiple) {
      const arr = formik.values[input.bitrixKey]
      if (arr.includes(item)) {
        const index = arr.indexOf(item)
        arr.splice(index, 1)
        formik.setFieldValue(input.bitrixKey, arr)
      } else {
        arr.push(item)
        formik.setFieldValue(input.bitrixKey, arr)
      }

    } else {
      formik.setFieldValue(input.bitrixKey, formik.values[input.bitrixKey] === item ? '' : item)
    }

  }


  const isSelected = (item) => {

    if (input.isMultiple && formik.values[input.bitrixKey].includes(item)) return true
    if (formik.values[input.bitrixKey] === item) return true

    return false

  }

  return (
    input.values.map((item, index) => (
      <div 
        className={`option cursor-pointer flex flex-row items-center ${isSelected(item.text) ? 'selected' : ''}`} 
        key={index} onClick={() => {handleChoice(item.text)}}>
          <div className="circle"/>
          <p className="inherit-input-font">{item.text}</p>
      </div>
    ))
  )
}