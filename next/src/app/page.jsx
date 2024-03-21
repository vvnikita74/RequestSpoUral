import Image from "next/image"


export default function Home() {
  return (
  <>
  <header className="flex flex-row flex-wrap justify-between items-center">
    <div className="img-wrapper">
      <Image src='/images/logo.webp' width={150} height={150} alt="СПО-Урал"/>    
    </div>
    <h1>Оставить заявку</h1>
  </header>
  </>
  )
}
