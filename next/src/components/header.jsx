'use client'
import { useContext } from "react"
import DataContext from "@/components/context/data-context"
import Image from "next/image"
import Link from "next/link"


export default function Header ({text}) {

  const { service, setService } = useContext(DataContext)

  return (
    <header className="flex flex-row justify-between items-center">
      <Link href='/' className="img-wrapper" onClick={() => {setService(null)}}>
        <Image src='/images/logo.webp' width={150} height={150} alt="СПО-Урал"/>    
      </Link>
      <h1 style={{textAlign: 'right'}}>{!text ? service ? service.name : 'Оставить заявку' : text}</h1>
    </header>
  )
}