import React from 'react';
import Image from 'next/image';
import ButtonSound from './buttonsound.js';
function CardImage({ altImage }){
    return(
        <div className='container bg-[##1abc9c]'>
            <div className='container'>
                <Image alt={altImage} src='/dog.jpg' width={100} height={100}/>
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