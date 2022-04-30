import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetcher as myFetcher } from '../lib/fetcher'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-cream">
      <Head>
        <title>Wiz Sullivan</title>
        <meta name="description" content="Wiz Sullivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <SWRConfig
        value={{
          refreshInterval: 10000,
          fetcher: myFetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
      <Footer />
    </div>
  )
}

export default MyApp
