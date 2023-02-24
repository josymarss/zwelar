import React, { useState } from 'react';
import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner(){
    const router = useState();
    // bg-[url('/bg-image.png')]
    return(
        // bg-[url('/bg-image.png')]
        <div className="bg-slate-500  w-full h-screen">
            <div className="bg-[url('/bg-image.png')] bg-cover w-full h-screen bg-no-repeat"></div>
            {/* <button>Come;ar agora</button> */}
        </div>
    );

}