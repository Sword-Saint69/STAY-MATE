import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Gotosite from '@/components/Gotosite'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>StayMate | 편리한 학교생활을 위해,</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Gotosite/>
      <Contact/>
    </>
  )
}
