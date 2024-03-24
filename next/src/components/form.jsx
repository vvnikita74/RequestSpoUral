/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CreateFieldObject from '@/utils/create-fields-object'
import createYupSchema from '@/utils/create-yup-schema'
import { useFormik } from 'formik'
import InputManager from '@/components/inputs/input-manager'
import { motion } from 'framer-motion'


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
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
    {inputs.map((item) => (
      <div className="input-container flex flex-col" key={item.label}>
        <label className='flex flex-row items-center' style={{gap: '5px'}}>
          {item.label}{item.isRequired ? <span style={{fontSize: 'inherit', fontWeight: 'inherit', color: 'red'}}> * </span> : <></>}
          {formik.errors[item.bitrixKey] && formik.touched[item.bitrixKey] && 
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className='inherit-p-font'
              style={{ color: 'red'}}>
                {formik.errors[item.bitrixKey].toLowerCase()}
            </motion.span>
          }
        </label>
        <InputManager input={item} formik={formik}/>
      </div>
    ))}
    </form>
  )

}