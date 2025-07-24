import '../styles/globals.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/gallery'>Gallery</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
