import Header from "@/components/header"
import Manager from "@/components/manager"
import { getTypes } from "@/utils/requests"
import Link from "next/link"


export default async function Home() {

  const types = await getTypes()

  return (
    <>
    <Header/>
    <main> 
      <Manager types={types}/>
    </main>
    <div className="bottom-container">
      <Link href='/policy'>Политика конфиденциальности</Link>
    </div>
    </>
  )
}
