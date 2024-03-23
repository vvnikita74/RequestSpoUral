'use client'
import createYupSchema from '@/utils/create-yup-schema'
import { useFormik } from 'formik'
import * as Yup from "yup"



export default function InputManager ({inputs}) {

  if (!Array.isArray(inputs)) return (<></>)

  const validationChema = createYupSchema(inputs)

  console.log(validationChema)

  return (
    inputs.map((item, index) => (
      <div className="input-container" key={item.label}>
        <label></label>
      </div>
    ))
  )

}