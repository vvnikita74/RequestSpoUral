'use client'
import { useContext } from 'react'
import DataContext from '@/components/context/data-context'
import ServiceChoice from '@/components/organisms/service-choice'
import Form from '@/components/form'
import InlineSVG from 'react-inlinesvg'
import createFieldObject from '@/utils/create-fields-object'
import createYupSchema from '@/utils/create-yup-schema'
import Link from 'next/link'


export default function Manager ({types}) {

  const { service, setService } = useContext(DataContext)

  if (service) {

    const validationSchema = createYupSchema(service?.inputs)
    const fields = createFieldObject(service?.inputs)

    return (
      <>
      <div className="instruction-container flex flex-col">
        <div className="flex justify-end">
          <button type='button' className='flex flex-row items-center cursor-pointer inherit-a-font' onClick={() => {setService(null)}}>
            К выбору услуг
            <InlineSVG src='/icons/arrow-left.svg' width={35} height={25} strokeWidth={2}/>
          </button>
        </div>
        <p className='inherit-a-font'>Мы ценим ваше время и&nbsp;стремимся обеспечить быструю и&nbsp;эффективную обработку заявок. Пожалуйста, заполняйте все&nbsp;поля в&nbsp;форме максимально корректно и&nbsp;полно. Это позволит Вам&nbsp;избежать дополнительных уточнений и&nbsp;сократить время на&nbsp;обработку вашей заявки.</p>
        <p className='inherit-a-font'>Вы всегда можете задать вопрос по заполнению, связавшись с нами по номеру телефону: <Link href='tel:88005502707'>{"8-(800)-550-27-07"}</Link></p>
        <p style={{color: 'red'}} className='inherit-a-font'>Поля,&nbsp;помеченные&nbsp;{'"*"'},&nbsp;являются обязательными к&nbsp;заполнению</p>
      </div>
      <Form inputs={service?.inputs} validationSchema={validationSchema} fields={fields}/>
      </>
    )
  }

  return (<ServiceChoice types={types}/>)
}