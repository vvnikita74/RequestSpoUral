/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useFormik } from 'formik'
import InputManager from '@/components/inputs/input-manager'
import { motion } from 'framer-motion'
import { getOriginalImageUrl } from '@/utils/get-image-url'
import Link from 'next/link'
import InlineSVG from 'react-inlinesvg'


export default function Form ({inputs, fields, validationSchema}) {

  if (!Array.isArray(inputs)) return (<></>)

  const formik = useFormik({
    initialValues: fields,
    validationSchema: validationSchema,
    onSubmit: () => {}
  })

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
      {inputs.map((item) => (
        <div className="input-container flex flex-col" key={item.label}>
          <label className='flex flex-row items-center flex-wrap' style={{gap: '5px'}}>
            {item.label}{item.isRequired ? <span style={{fontSize: 'inherit', fontWeight: 'inherit', color: 'red'}}> * </span> : <></>}
            {item?.file?.data && <Link href={getOriginalImageUrl(item.file)} target='_blank' alt='Ссылка на файл' className='inherit-label-font'>{`(${item.filename || "Ссылка"})`}</Link>}
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
      <button type='submit' className="flex flex-row items-center" style={{alignSelf: 'flex-end'}}>
        <p className='inherit-input-font'>Отправить заявку</p>
        <InlineSVG src='/icons/upload.svg' width={30} height={20}/>
      </button>
    </form>
  )

}