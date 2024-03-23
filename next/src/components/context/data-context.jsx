'use client'
import { createContext, useState } from "react";


const DataContext = createContext(null)
export default DataContext


export function DataViewContext({children}) {
  
  const [service, setService] = useState(null)

  return (
    <DataContext.Provider value={{service, setService}}>
      {children}
    </DataContext.Provider>
  )
}