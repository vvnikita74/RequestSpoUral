'use client'
import { useFormik } from 'formik'
import * as Yup from "yup"


export default function InputManager ({inputs}) {

  if (!Array.isArray(inputs)) return (<></>)

  console.log(inputs)

  return (
    inputs.map((item, index) => (
      <div className="input-container" key={item.label}>
        <label></label>
      </div>
    ))
  )

}