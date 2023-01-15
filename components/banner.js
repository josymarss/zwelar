import React, { useState } from 'react';
import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner(){
    const router = useState();
    // bg-[url('/bg-image.png')]
    return(
        <div className="bg-slate-500 bg-[url('/bg-image.png')] w-full h-screen bg-no-repeat bg-cover">
            {/* <img alt='banner' src='/bg-image.png' className={`w-full ${styles.imageBanner}`}/> */}
        </div>
    );

}