import '../styles/globals.css';

export const metadata = {
  title: 'Zwelar | o melhor jeito de aprender línguas nacionais',
  description: 'Aprender línguas nacionais angolanas',
}

import React from "react";
import Head from "next/head";
import Script from "next/script";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header/page';
import Footer from '../components/footer/page';

config.autoAddCss = false;
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5514991570328030"
          crossOrigin="anonymous"
        />
        <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0">
        </meta>
      </Head>
      <body>
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  )
}
