import 'styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reducer plus Context',
  description: 'Generated by create next app, typescript and tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="container mx-auto px-5 pt-20">{children}</main>
      </body>
    </html>
  )
}
