'use client'
import { useState } from 'react'
import Link from 'next/link'
import InlineSvg from 'react-inlinesvg'

export default function ServiceChoice ({types}) {

  const [service, setService] = useState(null)

  return (
    service ? 
    <div className="container flex flex-row">
    </div> :
    <div className="service-choice-container flex flex-col items-center">
      <div className="service-choice-wrapper flex flex-col">
        <h2>Выберите интересующую вас услугу</h2>
        <div className="flex flex-col service-list">
          {Array.isArray(types) && types.map((item, index) => (
            <div className="flex flex-col service-card" key={index}>
              <div className="flex flex-row items-center justify-between cursor-pointer service-link" onClick={() => {setService(item.attributes)}}>
                <h3 className='text-center'>{item.attributes.name}</h3>
                <InlineSvg src={'/icons/arrow-right.svg'}/>
              </div>
              <Link href={item.attributes.href} target='_blank'>Узнать подробнее</Link>
            </div>
          ))}
        </div>
      </div>  
    </div>
  )
}