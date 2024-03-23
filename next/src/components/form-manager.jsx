'use client'
import { useContext } from 'react'
import DataContext from '@/components/context/data-context'
import ServiceChoice from '@/components/atoms/service-choice'
import InputManager from '@/components/inputs/input-manager'


export default function FormManager ({types}) {

  const { service } = useContext(DataContext)

  if (service) { 
    return (<InputManager inputs={service?.inputs}/>)
  }

  return (<ServiceChoice types={types}/>)
}