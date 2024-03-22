import '@/styles/app.sass'
import { Roboto } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const font = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata = {
  title: 'Оставить заявку. СПО-Урал',
  manifest: '/site.webmanifest'
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  )
}
