'use client'
import { useContext } from 'react'
import DataContext from '@/components/context/data-context'
import ServiceChoice from '@/components/organisms/service-choice'
import Form from '@/components/form'


export default function Manager ({types}) {

  const { service } = useContext(DataContext)

  if (service) {
    return (
      <>
      <div className="instruction-container flex flex-col">
        <p className='inherit-a-font'>Мы ценим ваше время и&nbsp;стремимся обеспечить быструю и&nbsp;эффективную обработку заявок. Пожалуйста, заполняйте все&nbsp;поля в&nbsp;форме максимально корректно и&nbsp;полно. Это позволит Вам&nbsp;избежать дополнительных уточнений и&nbsp;сократить время на&nbsp;обработку вашей заявки.</p>
        <p style={{color: 'red'}} className='inherit-a-font'>Поля,&nbsp;помеченные&nbsp;{'"*"'},&nbsp;являются обязательными к&nbsp;заполнению</p>
      </div>
      <Form inputs={service?.inputs}/>
      </>
    )
  }

  return (<ServiceChoice types={types}/>)
}