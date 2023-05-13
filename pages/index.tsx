import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MuniGPT (beta)</title>
        <meta
          name="description"
          content="Ask me anything about zoning/land use regulations or the building code in Broward County, FL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} flex flex-col items-center`}>
        <div className={`mb-4`}>
          <Image src="/logo.png" alt="MuniGPT Logo" width={400} height={200} />
        </div>
        <p className={`mb-4`}>
          MuniGPT is an AI-powered tool designed to answer questions about zoning, land use regulations, and the building code in Broward County, FL. Please note that this is a beta version and may not always provide accurate or complete information. Always consult official sources for the most accurate and up-to-date information.
        </p>
        <div className={styles.center}>
          <SearchDialog />
        </div>
        <div className="py-8 w-full flex items-center justify-center space-x-6">
          <div className="border-l border-gray-300 w-1 h-4" />
          <div className="flex items-center justify-center space-x-4">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
