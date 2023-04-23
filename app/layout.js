export const metadata = {
  title: 'Zwelar | o melhor jeito de aprender línguas nacionais',
  description: 'Aprender línguas nacionais angolanas',
}
import '../styles/globals.css';
import React from "react";
import Head from "next/head";
import Script from "next/script";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header';
import Footer from '../components/footer';

import  '../styles/globals.css';

config.autoAddCss = false;

 
export default function RootLayout({ children, Component, pageProps }) {
 return (
    <html lang="en">
      <body>{children}</body>
      <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5514991570328030"
          crossOrigin="anonymous"
        />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer /> 
    </html>
  )
}
