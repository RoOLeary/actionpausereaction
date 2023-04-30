import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <div className="z-10 max-w-7xl items-center justify-between font-mono sm:text-xs text-sm lg:flex-col">
        <p className="font-mono font-bold text-center text-lg md:text-4xl">action | pause | reaction</p>
        <br/>
        <p className="font-mono text-center text-sm">coming (back) again soon. stay tuned</p>
        <br/>
        <br />
        <div className="py-8">
          <iframe width="100%" height="350px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2579536&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>

      
     
    </main>
  )
}
