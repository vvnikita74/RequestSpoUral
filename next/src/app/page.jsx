import ServiceChoice from "@/components/service-choice";
import Header from "@/components/header";
import { getTypes } from "@/utils/requests";

export default async function Home() {

  const types = await getTypes()

  return (
    <>
      <Header/>
      <main>
        <ServiceChoice types={types}/>
      </main>
    </>
  )
}
