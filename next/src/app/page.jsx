import FormManager from "@/components/form-manager";
import Header from "@/components/header";
import { getTypes } from "@/utils/requests";

export default async function Home() {

  const types = await getTypes()

  return (
    <>
      <Header/>
      <main>
        <FormManager types={types}/>
      </main>
    </>
  )
}
