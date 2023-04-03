import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Algorithimic Perfumery',
  description: 'By Scentronix',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*Header*/}
        <Header/>
        {/*NavBar*/}
        {children}</body>
    </html>
  )
}
