import Manager from "@/components/manager"
import Header from "@/components/header"
import { getTypes } from "@/utils/requests"
import { contactProcessing } from "@/utils/bx-requests"


export default async function Home() {

  const types = await getTypes()
  // await contactProcessing("ТЕСТОВЫЙ ТЕСТ ТЕСТ", "+7 (123) 123 123 12")

  return (
    <>
      <Header/>
      <main>
        <Manager types={types}/>
      </main>
    </>
  )
}
