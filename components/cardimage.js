import React from 'react';
import Image from 'next/image';
import ButtonSound from './buttonsound.js';


function CardImage({ name,translation,img,sound }){
    return(
        <div className='flex flex-col'>
            <div className=''>
                <div className="w-72 h-72 object-center border-2 border-slate-200  bg-no-repeat bg-cover shadow-xl rounded-sm">
                    <Image width={300} height={300} src={img} />
                </div>
                <div className='flex flex-row items-center gap-4 mt-3'>
                    <div className="mt-3">
                        <ButtonSound size={50} />
                    </div>
                    <div className='flex flex-col mt-3'>
                        {/* <h2 className='text-xl'>{name}</h2> */}
                        <p className='text-2xl font-semibold'>{translation}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default CardImage;