import Manager from "@/components/manager";
import Header from "@/components/header";
import { getTypes } from "@/utils/requests";

export default async function Home() {

  const types = await getTypes()

  return (
    <>
      <Header/>
      <main>
        <Manager types={types}/>
      </main>
    </>
  )
}
