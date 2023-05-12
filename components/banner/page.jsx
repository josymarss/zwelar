import React from 'react';
import Image from 'next/legacy/image';
// import styles from './banner.module.css';

export default function Banner(){
    // const router = useState();
    return(
        <div className="relative bg-slate-500 w-[100%] h-[100%] mt-96">
            <img
                src="/bg-image.png"
                alt='image'
              />
            {/* <button className='absolute bottom-19'>Começar agora</button> */}
        </div>
    );

}