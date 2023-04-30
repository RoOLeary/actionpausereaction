import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'action | pause | reaction',
  description: 'Irish Alternative rock...from The Netherlands and the UK',
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
