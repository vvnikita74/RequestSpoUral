'use client'
import { useContext } from "react"
import DataContext from "@/components/context/data-context"
import Image from "next/image"


export default function Header () {

  const { service } = useContext(DataContext)

  return (
    <header className="flex flex-row justify-between items-center">
      <div className="img-wrapper">
        <Image src='/images/logo.webp' width={150} height={150} alt="СПО-Урал"/>    
      </div>
      <h1>{service ? service.name : 'Оставить заявку'}</h1>
    </header>
  )
}