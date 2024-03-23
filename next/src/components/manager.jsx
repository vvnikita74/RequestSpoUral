'use client'
import { useContext } from 'react'
import DataContext from '@/components/context/data-context'
import ServiceChoice from '@/components/organisms/service-choice'
import Form from '@/components/form'


export default function Manager ({types}) {

  const { service } = useContext(DataContext)

  if (service) { 
    return (<Form inputs={service?.inputs}/>)
  }

  return (<ServiceChoice types={types}/>)
}