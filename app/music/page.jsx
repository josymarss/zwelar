import React from 'react';


const Music = () => {
  const MusicCard = ({author, title, imagUrl}) => {
    return(
         <div className="shadow-md bg-slate-50 p-3 w-30 mx-4 mt-4 music-card-content">
         <div className={`bg-[url('/music-images/${imagUrl}')] w-28 h-32 bg-cover rounded-sm transition-all opacity-80 bg-slate-900`} ></div>
         <p className="mt-2 text-[10pt] md:text-[12pt]">
           <strong>{author}</strong><br/> {title}
         </p>
       </div>
    );
  }

  const MusicLetter = () => {
    return (      
        <div className="p-5">
            <h2 className="font-semibold text-[14pt] md:text-[16pt] text-slate-900 text-left">
              Mona Ki Ngi Xica
            </h2>
            <div>
              <p className="text-[12pt] md:text-[14pt] text-green-500 mt-2 font-semibold">Bonga</p>
              <p className="text-[12pt] md:text-[14pt]  text-justify mt-4">
                  {`Alukenn n'golafua N'ga mu binga kia Muene ondo kala beniaba Eme n'gondodiame`}
              </p>
              <p className="text-justify text-[12pt] md:text-[14pt]  w-96 mt-4">
                {`Mona mona muene Kissueia weza Mona mona muene Kalunga n'gumba`}
              </p>
              <p className="text-justify text-[12pt] md:text-[14pt]  w-96 mt-4">
                {`N'zambi awani banack mona N'ga muvalele Muene ondo kala beniaba Eme
                n'gondodiame`}
              </p>
            </div>
            <button className="text-xl  text-500 mt-2 font-semibold">Traduzir</button>
      </div>
  );
  }
  return (
    <div className="font-mulish flex flex-row p-6">
        {/* {/* MUISC LETTERS} */}
      <div className='W-[50%]'>
        <MusicLetter />
      </div>

      <div className="col-span-1 p-5 W-[40%]">
        <h2 className="text-slate-900 font-semibold  text-[12pt] mx-4 w-[100%]">
          Mais músicas
        </h2>
        {/* {/* Cards} */}
        <div>
          <div className="flex gap-2 flex-wrap">
            <MusicCard author="Ruy Mingas"  title="Birin birin" imagUrl='ruy.jpg'/>
            <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='antonio.jpg'/>
            <MusicCard author="Yuri da Cunha"  title="Kuma Kwakie" imagUrl='yuri.jpeg'/>
            <MusicCard author="Artur Nunes"  title="Mana" imagUrl='Artur.jpg'/>
            <MusicCard author="Bonga"  title="Mona Ki Ngi Xica" imagUrl='bonga.jpg'/>
            <MusicCard author="Edy Tussa"  title="Pekenina" imagUrl='edy.jpg'/>
          </div>
          <div className='flex w-[100%]'>
            <span>Anterior ...</span>
            <span> 1 2 3 4 5 ...</span>
            <span>Seguinte</span>
          </div>
        </div>
      </div> 
     
    </div>
  );
}

export default Music;
