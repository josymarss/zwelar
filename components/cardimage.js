import React from 'react';
import Image from 'next/image';
import ButtonSound from './buttonsound.js';
function CardImage({ altImage }){
    return(
        <div className='container'>
            <div className='container bg-cyan-50 w-80 h-80 p-5'>
                <Image 
                    className='w-64'
                    alt={altImage}
                    src='/dog.jpg'
                    width={300}
                    height={300}
                />
            </div>
            <div className='container'>
                <p className=' text-red-500'>Nome da imagem</p>
            </div>
            <div>
                <p>Significado em kimbundu</p>
                {/* <ButtonSound /> */}
            </div>
        </div>
    );
};

export default CardImage;