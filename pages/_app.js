import Head from 'next/head';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";


import '../styles/globals.css'
import { Header } from '../components/header'
import Footer from '../components/footer'

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return(
    <> 
      <Head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5514991570328030"
          crossOrigin='anonymous'>
        </script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer /> 
    </>
  )
}

export default MyApp
