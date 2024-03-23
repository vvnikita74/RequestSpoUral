'use client'
import { useContext } from 'react'
import DataContext from '@/components/context/data-context'
import ServiceChoice from '@/components/atoms/service-choice'

export default function FormManager ({types}) {

  const { service } = useContext(DataContext)

  if (service) { 
    return (<></>)
  }

  return (
    <ServiceChoice types={types}/>
  )
}