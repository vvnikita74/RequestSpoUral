import ReactInputMask from "react-input-mask";

export default function String ({input, formik}) {
  return (
    <div className={`input-wrapper ${formik.touched[input.bitrixKey] ? 'touched' : ''}`}>
      {input.mask ?
      <ReactInputMask mask={input.mask} name={input.bitrixKey} id={input.bitrixKey}
      onChange={formik.handleChange} onBlur={formik.handleBlur}
      placeholder={input.placeholder || ''} value={formik.values.bitrixKey}/>
      :
      <input name={input.bitrixKey} id={input.bitrixKey}
        onChange={formik.handleChange} onBlur={formik.handleBlur}
        placeholder={input.placeholder || ''} value={formik.values.bitrixKey}/>
      }
    </div>
  )
}