import '../styles/globals.css'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#FF4E25" />
      <Component {...pageProps} />
    </>
  )
}
