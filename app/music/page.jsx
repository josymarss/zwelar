import React from 'react';
const MusicCard = ({author, title, imagUrl}) => {
  return(
       <div className=" shadow-md bg-slate-50 p-3 w-32 mx-4 mt-4 ">
       <div className={`bg-[url('/music-images/${imagUrl}')] w-32 h-32 bg-cover rounded-sm hover:w-36 transition-all cursor-pointer opacity-95 hover:opacity-100 bg-slate-900`} ></div>
       <p className="mt-2 text-md">
         <strong>{author}</strong> {title}
       </p>
     </div>
  );
}

const Music = () => {
  return (
    <div className="font-mulish p-15 grid lg:grid-cols-3 gap-2 md:grid-col-2 m-20">
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

      <div className="col-span-1 p-5">
        <h2 className="font-semibold text-3xl text-slate-900 text-left">
          {`Mona Ki Ngi Xica`}
        </h2>
        <p className="text-xl text-green-500 mt-2 font-semibold">Bonga</p>
        <p className=" text-xl text-justify mt-4">
        {`Alukenn n'golafua N'ga mu binga kia Muene ondo kala beniaba Eme
          n'gondodiame`}
        </p>
        <p className="text-justify text-xl w-96 mt-3">
        {`Mona mona muene Kissueia weza Mona mona muene Kalunga n'gumba`}
        </p>
        <p className="text-justify text-xl w-96 mt-3">
        {`N'zambi awani banack mona N'ga muvalele Muene ondo kala beniaba Eme
          n'gondodiame`}
        </p>
      </div>

      <div className="col-span-1 p-5">
        <h2 className="text-slate-900 font-semibold text-xl mx-4">
          Mais músicas
        </h2>
        {/* {/* Cards} */}
        <div className="flex gap-2 flex-wrap">
          <MusicCard author="Ruy Mingas"  title="Birin birin" imagUrl='ruy.jpg'/>
          <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='antonio.jpg'/>
          <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='yuri.jpeg'/>
          <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='Artur.jpg'/>
          <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='edy.jpg'/>
       


          <div className=" shadow-md bg-slate-50 p-3 w-32 mx-4 mt-4">
            <div className="bg-[url('/music-images/ruy.jpg')] w-32 h-32 bg-cover rounded-sm hover:w-36 transition-all cursor-pointer opacity-80 hover:opacity-100 bg-slate-900"></div>
            <p className="mt-2 text-md">
              <strong>Artur Nunes</strong> Mana
            </p>
          </div>
          <div className=" shadow-md bg-slate-50 p-3 w-32 mx-4 mt-4">
            <div className="bg-[url('/music-images/')] w-32 h-32 bg-cover rounded-sm hover:w-36 transition-all cursor-pointer opacity-80 hover:opacity-100 bg-slate-900"></div>
            <p className="mt-2 text-md">
              <strong>Edy Tussa</strong> Pekenina
            </p>
          </div>
          <div className=" shadow-md bg-slate-50 p-3 w-32 mx-4 mt-4">
            <div className="bg-[url('/music-images/')] w-32 h-32 bg-cover rounded-sm hover:w-36 transition-all cursor-pointer opacity-80 hover:opacity-100 bg-slate-900"></div>
            <p className="mt-2 text-md">
              <strong>Yuri da Cunha</strong> Kuma Kwakie
            </p>
          </div>
        </div>
      </div> 
     
    </div>
  );
}

export default Music;
