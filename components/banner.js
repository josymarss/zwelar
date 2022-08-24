import React, { useState } from 'react';
import Image from 'next/image';

export default function Banner(){
    const router = useState();
    
    return(
        <div className="">
                <div className="p-12 flex items-center justify-center w-full bg-slate-800 bg-cover bg-[url('/bg-image.png')] bg-no-repeat h-[300px]">
                    <div className="flex flex-col justify-center  items-center bg-color-red-400">
                        <h2 className="w-[550px] ml-10 mt-4 inline-block font-semibold font-mono text-4xl text-white text-center">
                            Mona Yami, está mais do que na hora de você <span className="text-green-400">zuelar</span> kimbundu
                        </h2>
                        <p className='mt-3 text-white text-xl opacity-70 w-96 text-center'>Aprenda com textos, imagens e áudios, tudo isso para o seu melhor aprendizado.</p>
                        <button className='hover:rounded-md hover:text-black bg-white text-slate-800 p-2 rounded-xs w-44 mt-4 font-bold font-sm'>Começar a usar</button>
                    </div>
                </div>
                 
        </div>
    );

}