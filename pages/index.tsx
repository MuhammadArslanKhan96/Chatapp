import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     

     

      <div className="mb-32 text-black gap-x-10 gap-y-10 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
       
          <Link href="/Signup" className={`mb-3 cursor-pointer text-2xl font-semibold`}
           >
            Sign up{' '}
           
          </Link>
        
        

      
          <Link href="" className={`mb-3 text-2xl font-semibold`}>
            Sign in{' '}
           
          </Link>
        

     
          <Link href="/Mindmap" className={`mb-3 text-2xl font-semibold cursor-pointer`}
           >
            mind map{' '}
           
          </Link>
       
          <Link href="/Cards" className={`mb-3 text-2xl font-semibold`}
          >
           
            card page{' '}
           
          </Link>
          <Link href="/Send" className={`mb-3 text-2xl font-semibold cursor-pointer`}
          >
            send message{' '}
           
          </Link>
          <Link href="/Chart" className={`mb-3 text-2xl font-semibold`}
          >
            chart{' '}
           
          </Link>
          <Link href="/Project" className={`mb-3 text-2xl font-semibold cursor-pointer`}
           >
            project name{' '}
           
          </Link>
        
      </div>
    </main>
  )
}
