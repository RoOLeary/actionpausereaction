import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <div className="z-10 max-w-7xl items-center justify-between font-mono sm:text-xs text-sm lg:flex-col">
        <p className="font-mono font-bold text-center text-lg md:text-2xl">action | pause | reaction</p>
        <br/>
        <p className="font-mono text-center text-sm">coming (back) again soon. stay tuned</p>
        <br/>
        <p className="font-mono text-center text-sm">listen on <a href="https://soundcloud.com/actionpausereaction" target="_blank" rel="no-referrer">soundcloud</a></p>
      </div>

      
     
    </main>
  )
}
