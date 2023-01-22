import React, { useState } from 'react';
import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner(){
    const router = useState();
    // bg-[url('/bg-image.png')]
    return(
        // bg-[url('/bg-image.png')]
        <div className="bg-slate-500  w-full h-screen bg-no-repeat ">
            <Image alt='banner' src='/bg-image.png' className='w-full object-contain'/>
            {/* <button>Come;ar agora</button> */}
        </div>
    );

}