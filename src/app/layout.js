import './globals.css'

export const metadata = {
  title: 'Algorithimic Perfumery',
  description: 'By Scentronix',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
