import { NumericFormat } from "react-number-format";

export default function Number ({input, formik}) {

  return (
    <div className={`input-wrapper ${formik.touched[input.bitrixKey] ? 'touched' : ''}`}>
      <NumericFormat name={input.bitrixKey} id={input.bitrixKey} valueIsNumericString
        onBlur={formik.handleBlur}
        onValueChange={(values) => {formik.setFieldValue(input.bitrixKey, values.floatValue)}}
        placeholder={input.placeholder || ''} value={formik.values.bitrixKey}/>
    </div>
  )
}