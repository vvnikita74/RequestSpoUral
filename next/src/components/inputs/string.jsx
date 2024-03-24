export default function String ({input, formik}) {
  return (
    <div className={`input-wrapper ${formik.touched[input.bitrixKey] ? 'touched' : ''}`}>
      <input name={input.bitrixKey} id={input.bitrixKey}
        onChange={formik.handleChange} onBlur={formik.handleBlur}
        placeholder={input.placeholder || ''} value={formik.values.bitrixKey}/>
    </div>
  )
}