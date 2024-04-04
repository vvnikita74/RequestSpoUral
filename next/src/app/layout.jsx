import { DataViewContext } from '@/components/context/data-context'
import '@/styles/app.sass'
import { Roboto } from 'next/font/google'
import Script from '@/components/script'


const font = Roboto({ subsets: ['latin'], weight: ['300', '400', '500'] })

export const metadata = {
  title: 'Оставить заявку. СПО-Урал',
  manifest: '/site.webmanifest'
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Script/>
        <DataViewContext>
          {children}
        </DataViewContext>
      </body>
    </html>
  )
}
