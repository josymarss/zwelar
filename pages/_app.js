import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header/page';
import Footer from '../components/footer/page';

// import  '../styles/globals.css' 

import {NextUIProvider} from "@nextui-org/react";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header />
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
      <Footer />
      </> 
  )
}

export default MyApp;
