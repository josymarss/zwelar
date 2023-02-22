import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  faDotCircle,
  faEye,
  faHeadphones,
  faVolumeUp,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Leading() {
  return (
    <>
      <Head>
        <title>Zwelar | Aprenda Linguas nacionais</title>
        <meta
          name="Sobre o site"
          description="O melhor e site para aprender línguas nacionais"
        />
      </Head>
      {/* Partners */}
      <div className="flex items-center justify-center gap-x-11 py-3 flex-wrap bg-slate-900 w-full h-32 font-mulish">
        <p className="text-2xl text-white">bantu.io</p>
        <p className='text-2xl text-white font-bold'>ANGOPOLYGLOT</p>
      </div>


      <div className="flex flex-col items-center justify-center p-4 mt-6">
        <h2 className="w-[440px] text-center font-mulish text-slate-900 text-3xl mb-4 mt-4">
          Aprender Linguas nacionais nunca foi tão fácil!
        </h2>
        <div className="flex flex-row items-center mt-12">
          <div className="">
            <div className="bg-[url('/landing-images/kid.jpg')] w-80 h-80 bg-cover border-slate-100 rounded-sm shadow-2xl"></div>
          </div>
          <div className="ml-8">
            <ul>
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-gray-300 mr-2"
                />
                <li className="text-xl text-gray-800 font-normal font-mulish">
                  Aprenda dentro e fora de Angola, e acabaram-se as desculpas
                </li>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-gray-300 mr-2"
                />
                <li className="text-xl text-gray-800 font-normal font-mulish">
                  Aprenda na sua casa de casa, no seu{" "}
                  <strong>computador</strong> ou seu <strong>telefone</strong>
                </li>
              </div>
              <div className="mt-2 flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-gray-300 mr-2"
                />
                <li className="text-xl text-gray-800 font-normal font-mulish">
                  Pratique a quelaquer momento, sobre o que aprendeu
                </li>
              </div>
              <div className="mt-2 flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-gray-300 mr-2"
                />
                <li className="text-xl text-gray-800 font-normal font-mulish">
                  Partilha com seus amigos e familiares, o quanto tens{" "}
                  <i>Zuelado</i>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Pratice  */}
      <div className="flex flex-col justify-center items-center p-4 mt-24 bg-slate-900">
        <h2 className="w-[440px] text-center text-white text-3xl mb-4 mt-4 font-mulish">
          Criado com foco no seu nível de entendimento
        </h2>
        <div className="flex flex-row gap-10 mb-8 ">
          <div className="flex flex-col items-center gap-4 border border-[#232e36] w-96 h-64 mt-12 p-4">
            <FontAwesomeIcon
              icon={faEye}
              className="text-green-300 mr-2"
              size="3x"
            />
            <p className="text-white font-semibold text-2xl font-mulish">Olhe</p>
            <p className="text-white text-center text-lg font-mulish">
              Olhe atentamente para as imagens, isso lhe ajuda a criar quandos
              mentais enquand ouve o significado sde cada palavra
            </p>
          </div>
          <div className=" flex flex-col items-center gap-4 border border-[#232e36] w-96 h-64 mt-12 p-4">
            <FontAwesomeIcon
              icon={faHeadphones}
              className="text-green-300 mr-2"
              size="3x"
            />
            <p className="text-white font-semibold text-2xl font-mulish">Pratique</p>
            <p className="text-white text-center text-lg font-mulish">
              Praticar é a melhor forma de aprender, aqui você vai praticar nos
              sentidos da audição.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border border-[#232e36] w-96 h-64 mt-12 p-4">
            <FontAwesomeIcon
              icon={faVolumeUp}
              className="text-green-300  mr-2"
              size="3x"
            />
            <p className="text-white font-semibold text-2xl font-mulish">Fale</p>
            <p className="text-white text-center text-lg font-mulish">
              Por ser uma língua bantu interpretada, têm palavras com
              acentuações tónicas que se mal ditas/acentuadas podem ter outro
              significado e sentido.
            </p>
          </div>
        </div>
      </div>
      {/* Family */}
      <div className="flex justify-start bg-slate-100 ">
        <div className=" bg-[url('/landing-images/children.jpg')] w-[700px] h-[500px] bg-cover border-slate-100 "></div>
        <div className="w-[700px] flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faLocationArrow}
            className="text-slate-800 mr-2"
            size="4x"
          />
          <h2 className="w-[440px] text-center text-slate-900 text-3xl mb-4 mt-4 font-mulish">
            Aprenda na diáspora
          </h2>
          <p className="mt-4 p-4 text-lg text-center font-mulish">
            O Zuelar permite que filhos de descendentes de reis e afro descentes
            aprendam a língua dos seus ancestrais aonde quer que estejam.
            Afro-brasileiros e Angolanos nascidos em Portugal podem
            reconectar-se com sua terra mãe.
          </p>
        </div>
      </div>
      {/* Music section */}
      <div className="flex flex-col items-center justify-center mt-12 gap-2 p-4 rounded-sm drop-shadow-2xl">
        <h2 className="w-[440px] text-center text-slate-900 text-3xl mb-4 mt-4 font-mulish">
          Oiça músicas na língua nacional kimbundu{" "}
          <strong>e veja suas traduções</strong>
        </h2>
        <div className="gap-4 flex flex-row items-center mt-4">
          <div className="w-[500px] h-[400px]">
            <Image
              width={500}
              height={400}
              objectFit="cover"
              quality={65}
              alt="Ouvir música"
              src="/landing-images/sing.png"
            />
          </div>
          <p className="w-96 text-center text-xl text-slate-900 font-normal mb-4 ml-30 font-mulish">
            Todo usuário que entende pode adicionar letras de músicas
          </p>
        </div>
      </div>
    </>
  );
}
