import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Bio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <div className="z-10 max-w-1/2 mx-auto items-center justify-between font-mono sm:text-xs text-sm lg:flex-col">
        <h1 className="font-mono font-bold text-center text-lg md:text-4xl">action | pause | reaction</h1>
        <br/><br />
        <p className="font-mono text-center text-sm">the story of action pause reaction, is a tale of unfinished business. So let&apos;s lick ihrr again.</p>
        <br />
        <p className="font-mono text-center text-sm">we were gone. but now we&apos;re back. and we&apos;re louder than ever. <Link href="/">stay tuned.</Link> xoxo</p>

        <br/>
      </div>
    </main>
  )
}