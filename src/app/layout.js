import { Tektur } from 'next/font/google'
import './globals.css'

const tektur = Tektur({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: {
    absolute: 'SalamP | Dev',
    default: 'SalamP | Dev',
    template: '%s | SalamP'
  },
  description: "Salam Pararta's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tektur.className}>{children}</body>
    </html>
  )
}
