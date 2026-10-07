import { Sora, Inter } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-sora' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Fermor – Your one-stop destination for financial decisions',
  description: 'Track your spending, plan how you grow and set goals with Fermor.',
}
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
