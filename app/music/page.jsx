"use client"

import React, { useEffect, useState } from 'react';
import singers from '../../data/singers.json'
import Image from 'next/image';

const Music = () => {
  const [singersContent, setSingersContent] = useState(singers)
  const [pageNumber, setPageNumber] = useState(1);
  const [singer, setSinger] = useState(1);

  useEffect(()=>{
    setSinger(singersContent[1])
  },[])
  
  const previousPageHandler = () => {
      setPageNumber(pageNumber-1);
  }
  const nextPageHandler = () => {
      setPageNumber(pageNumber+1);
  }

  const MusicCard = ({author, title, imagUrl}) => {
    return(
         <div className="w-[fit-content] shadow-md bg-slate-50 p-2 mx-4 mt-4">
         <div className='border-solid w-auto h-auto bg-cover rounded-sm transition-all opacity-100 bg-slate-900' >
         <Image
                  width={150}
                  height={150}
                  quality={100}
                  intrinsec= 'true'
                  alt="singer"
                  src={`/music-images/${imagUrl}`}
          />
         </div>
         <p className="mt-2 text-[8pt] md:text-[12pt]">
           <strong className='text-[6pt] md:text-[10pt]'>{author}</strong><br/> {title}
         </p>
       </div>
    );
  }
  // /music-images/${imagUrl}

  const MusicLetter = ({lyric, author, title}) => {
    return (      
        <div className="w-[80%] flex flex-col flex-wrap">
            <h2 className="font-semibold text-[14pt] md:text-[16pt] text-slate-900 text-left">
              {title}
            </h2>
            <div className='flex flex-col flex-wrap text-center '>
              <p className="text-[10pt] md:text-[12pt]  text-green-500 mt-2 font-semibold text-left">{author}</p>

              <p className="text-[10pt] md:text-[12pt]  text-justify mt-4">
                  {`Alukenn n'golafua N'ga mu binga kia Muene ondo kala beniaba Eme n'gondodiame`}
              </p>
              <p className="text-justify text-[12pt] md:text-[14pt]  w-[100%] mt-4">
                {`Mona mona muene Kissueia weza Mona mona muene Kalunga n'gumba`}
              </p>
              <p className="text-justify text-[12pt] md:text-[14pt]  w-[100%] mt-4">
                {`N'zambi awani banack mona N'ga muvalele Muene ondo kala beniaba Eme
                n'gondodiame`}
              </p>
            </div>
            {/* <button className="text-xl  text-500 mt-2 font-semibold">Traduzir</button> */}
      </div>
  );
  }
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-6 font-mulish w-full">
        {/* {/* MUISC LETTERS} */}
      <div className=''>
        <MusicLetter 
          lyric={singer.lyric} 
          author={singer.name} 
          title={singer.music_title}
          />
      </div>

      <div>
        <h2 className="text-slate-900 font-semibold  text-[12pt] mx-4 w-[100%]"> 
          Mais músicas 
        </h2>
        {/* {/* Cards} */}
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-3 item-center">
          {
              singersContent.map((ob)=> <MusicCard 
                                        key={ob.id} 
                                        author={ob.name} 
                                        title={ob.music_title} 
                                        imagUrl={ob.pic}
                                        />)
            } 
          </div>
          <div className='flex w-full'>
            <span 
              className='pagechange-button'
              onClick={previousPageHandler}>
                  Anterior
            </span>
            <span>{pageNumber}</span>
            <span 
              className='pagechange-button'
              onClick={nextPageHandler}>
                Seguinte
            </span>
          </div>
        </div>
      </div> 
     
    </div>
  );
}

function solitTextByLine(text){
  let lines =  text.split(/\n/);
}

// export async function getServerSideProps(){

//   const res = await fetch('../../data/singers.json');
//   console.log(res)
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Music;
