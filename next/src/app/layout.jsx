import '@/styles/app.sass'


export const metadata = {
  title: 'Оставить заявку. СПО-Урал',
  manifest: '/site.webmanifest'
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
