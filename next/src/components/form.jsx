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

  console.log(inputs)

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
    {inputs.map((item) => (
      <div className="input-container flex flex-col" key={item.label}>
        <label>{item.label}</label>
      </div>
    ))}
    </form>
  )

}