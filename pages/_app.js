import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";   

import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header/page';
import Footer from '../components/footer/page';

// import  '../styles/globals.css' 
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header />
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
      <Footer />
      </> 
  )
}

export default MyApp;
