/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CreateFieldObject from '@/utils/create-fields-object'
import createYupSchema from '@/utils/create-yup-schema'
import { useFormik } from 'formik'



export default function Form ({inputs}) {

  if (!Array.isArray(inputs)) return (<></>)

  const validationChema = createYupSchema(inputs)
  const fields = CreateFieldObject(inputs)

  const formik = useFormik({
    initialValues: fields,
    validationSchema: validationChema,
    onSubmit: () => {}
  })

  return (
    inputs.map((item, index) => (
      <div className="input-container" key={item.label}>
        <label></label>
      </div>
    ))
  )

}