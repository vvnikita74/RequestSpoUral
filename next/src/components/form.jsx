/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CreateFieldObject from '@/utils/create-fields-object'
import createYupSchema from '@/utils/create-yup-schema'
import { useFormik } from 'formik'
import InputManager from '@/components/inputs/input-manager'
import { motion, AnimatePresence } from 'framer-motion'


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
        <label>{item.label}{item.isRequired ? <span style={{fontSize: 'inherit', fontWeight: 'inherit', color: 'red'}}> *</span> : <></>}</label>
        <InputManager input={item} formik={formik}>
          <AnimatePresence>
            {formik.errors[item.bitrixKey] && formik.touched[item.bitrixKey] && 
              <motion.div className='error' 
                initial={{scale: 0, opacity: 0}} 
                animate={{scale: 1, opacity: 1}} 
                exit={{scale: 0, opacity: 0}}
                transition={{bounce: 0}}>
                  <p>{formik.errors[item.bitrixKey]}</p>
              </motion.div>}
          </AnimatePresence>
        </InputManager>
      </div>
    ))}
    </form>
  )

}