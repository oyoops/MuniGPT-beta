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
        <title>MuniGPT</title>
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
          MuniGPT can answer questions about the building code and land use/zoning regulations in Broward County, Florida.
          That said, it uses an outdated and obsolete AI model.
          Give MuniGPT a try, but then head to oyoops.com to use a much smarter AI that is trained on the Live Local Act (SB-102).
        </p>
        <div className={styles.center}>
          <SearchDialog />
        </div>
        <div style={{fontSize: '11px'}} className="py-8 w-full flex items-center justify-center space-x-6">
          <div className="flex items-center justify-center space-x-4">
            Created by <a href="https://twitter.com/oyoops">@oyoops</a>.
          </div>
        </div>
      </main>
    </>
  )
}
