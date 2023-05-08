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
<main className={styles.main}>
<div className={styles.center}>
<h1 className={styles.title}>MuniGPT</h1>
<p className={styles.description}>
MuniGPT is an AI-powered tool designed to answer questions about zoning, land use regulations, and the building code in Broward County, FL. Please note that this is a beta version and may not always provide accurate or complete information. Always consult official sources for the most accurate and up-to-date information.
</p>
<SearchDialog />
</div>
<div className="py-8 w-full flex items-center justify-center space-x-6">
<div className="border-l border-gray-300 w-1 h-4" />
<div className="flex items-center justify-center space-x-4">
<div className="opacity-75 transition hover:opacity-100 cursor-pointer">
<Link
             href="https://oyoops.com"
             className="flex items-center justify-center"
           >
<Image src={'/supabase.svg'} width="20" height="20" alt="oyoops logo" />
</Link>
</div>
</div>
</div>
</main>
</>
)
}
