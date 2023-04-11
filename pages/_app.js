import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header';
import Footer from '../components/footer';

import  '../styles/globals.css'

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
      <Footer /> 
    </>
  )
}

export default MyApp;
