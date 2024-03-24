export default function String ({input, formik, children}) {
  return (
    <div className="input-wrapper">
      <input name={input.bitrixKey} id={input.bitrixKey}
        onChange={formik.handleChange} onBlur={formik.handleBlur}
        placeholder={input.placeholder || ''} value={formik.values.bitrixKey}/>
      {children}
    </div>
  )
}