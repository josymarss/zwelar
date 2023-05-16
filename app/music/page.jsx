import React from 'react';


const Music = () => {
  const MusicCard = ({author, title, imagUrl}) => {
    return(
         <div className=" shadow-md bg-slate-50 p-3 w-32 mx-4 mt-4 hover:cursor-pointer  ">
         <div className={`bg-[url('/music-images/${imagUrl}')] w-32 h-32 bg-cover rounded-sm hover:w-36 transition-all opacity-80 hover:opacity-100 bg-slate-900`} ></div>
         <p className="mt-2 text-md">
           <strong>{author}</strong> {title}
         </p>
       </div>
    );
  }

  const MusicLetter = () => {
    return (      
        <div className="lg:col-span-1 p-5">
            <h2 className="font-semibold text-3xl text-slate-900 text-left">
              Mona Ki Ngi Xica
            </h2>
            <p className="text-xl text-green-500 mt-2 font-semibold">Bonga</p>
            <p className=" text-xl text-justify mt-4">
                {`Alukenn n'golafua N'ga mu binga kia Muene ondo kala beniaba Eme n'gondodiame`}
            </p>
            <p className="text-justify text-xl w-96 mt-3">
              {`Mona mona muene Kissueia weza Mona mona muene Kalunga n'gumba`}
            </p>
            <p className="text-justify text-xl w-96 mt-3">
              {`N'zambi awani banack mona N'ga muvalele Muene ondo kala beniaba Eme
              n'gondodiame`}
            </p>
      </div>
  );
  }
  return (
    <div className="font-mulish flex flex-row p-6">
        {/* {/* MUISC LETTERS} */}
      <div className='W-[50%]'>
        <MusicLetter />
        <MusicLetter />
      </div>

      <div className="col-span-1 p-5 W-[40%]">
        <h2 className="text-slate-900 font-semibold text-xl mx-4 w-[100%]">
          Mais músicas
        </h2>
        {/* {/* Cards} */}
        <div>
          <div className="flex gap-2 flex-wrap">
            <MusicCard author="Ruy Mingas"  title="Birin birin" imagUrl='ruy.jpg'/>
            <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='antonio.jpg'/>
            <MusicCard author="Artur Nunes"  title="Mana" imagUrl='Artur.jpg'/>
            <MusicCard author="Bonga"  title="Mona Ki Ngi Xica" imagUrl='bonga.jpg'/>
            <MusicCard author="Edy Tussa"  title="Pekenina" imagUrl='edy.jpg'/>
            <MusicCard author="Yuri da Cunha"  title="Kuma Kwakie" imagUrl='yuri.jpeg'/>
          </div>
          <div className='flex w-[100%]'>pages numer</div>
        </div>
      </div> 
     
    </div>
  );
}

export default Music;
