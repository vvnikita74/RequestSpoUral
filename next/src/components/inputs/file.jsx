import InlineSVG from "react-inlinesvg"

export default function File ({input, formik}) { 
  
  const handleButtonClick = () => document.getElementById(input.bitrixKey).click()

  const handleChange = (event) => {
    const files = event.target.files
    const filesArray = Array.from(files)
    const arr = filesArray.concat(formik.values[input.bitrixKey])
    formik.setFieldValue(input.bitrixKey, arr)
  }

  const deleteFile = (index) => {
    const arr = formik.values[input.bitrixKey]
    arr.splice(index, 1)
    formik.setFieldValue(input.bitrixKey, arr)
  }
  
  return (<>
    <input name={input.bitrixKey} id={input.bitrixKey}
    onBlur={formik.handleBlur} type="file"
    multiple={input.isMultiple ? true : false}
    onChange={handleChange} style={{display: 'none'}}/>
    <div className="file-choice-container flex flex-col">
      {formik.values[input.bitrixKey].map((item, index) => (
        <div className="file-wrapper flex flex-row items-center" key={index}>
          <p className="inherit-input-font">{item.name}</p>
          <InlineSVG src="/icons/close.svg" width={25} height={25} className="close-btn" onClick={() => {deleteFile(index)}}/>
        </div>
      ))}
      {(input.isMultiple || formik.values[input.bitrixKey].length !== 1) && 
      <button type='button' className="file-btn-wrapper flex flex-row items-center" style={{gap: '10px'}} onClick={handleButtonClick}>
        <p className="inherit-input-font">{`Выбрать ${input.isMultiple ? 'файлы' : 'файл'}`}</p>
        <InlineSVG src="/icons/file-upload.svg" width={25} height={25}/>
      </button>
      }
    </div>
  </>)
}