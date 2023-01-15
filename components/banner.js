import React, { useState } from 'react';
import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner(){
    const router = useState();
    // bg-[url('/bg-image.png')]
    return(
        <div className={`bg-slate-500 ${styles.container}`}>
            <img src='/bg-image.png' className={`w-full ${styles.imageBanner}`}/>
        </div>
    );

}