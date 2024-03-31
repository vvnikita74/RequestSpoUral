/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useFormik } from 'formik'
import InputManager from '@/components/inputs/input-manager'
import { motion } from 'framer-motion'
import { getOriginalImageUrl } from '@/utils/get-image-url'
import Link from 'next/link'
import InlineSVG from 'react-inlinesvg'
import { useContext, useState } from 'react'
import DataContext from '@/components/context/data-context'
import CircleLoader from '@/components/atoms/circle-loader'
import { createLead } from '@/utils/bx-requests'


export default function Form ({inputs, validationSchema, fields, filesKey}) {

  if (!Array.isArray(inputs)) return (<></>)
  
  const { service } = useContext(DataContext)

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)


  const submitFunction = async (values) => {

    const valuesObj = { ...values }
    
    // extracting files fields
    const filesObj = {}
    for (let i = 0; i < filesKey.length; i++) {
      const item = filesKey[i]
      filesObj[item] = valuesObj[item]
      delete valuesObj[item]
    }

    try {

      setIsLoading(true)

      const isLeadCreated = await createLead(valuesObj, filesKey, service.name)

      if (isLeadCreated) {
        setIsLoading(false)
        setIsSuccess(true)
      }

    }
    catch (error) {
      setIsLoading(false)
      alert('Ошибка создания заявки. Пожалуйста, попробуйте еще раз')
    }

  }


  const formik = useFormik({
    initialValues: fields,
    validationSchema: validationSchema,
    onSubmit: submitFunction
  })


  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
      <div className={`inputs-container flex flex-col ${isLoading || isSuccess ? 'disabled' : ''}`}>
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
      </div>  
      <button className={`flex flex-row items-center ${isSuccess ? 'success' : ''}`} style={{alignSelf: 'flex-end'}} disabled={isSuccess || isLoading} type='submit'>
        <p className='inherit-input-font'>{isSuccess ? "Успешно" : "Отправить заявку"}</p>
        {isLoading ? <CircleLoader/> : <InlineSVG src='/icons/upload.svg' width={30} height={20}/>}
      </button>
    </form>
  )

}