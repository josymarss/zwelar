import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header/page';
import Footer from '../components/footer/page';

// import  '../styles/globals.css' 

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
