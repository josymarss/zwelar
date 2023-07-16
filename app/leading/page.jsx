"use client"
import React from "react";
import Image from "next/image";
import {
  faDotCircle,
  faEye,
  faHeadphones,
  faVolumeUp,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadComponent from "../../components/head/page";

export default function Leading() {
      return (
        <>
          <HeadComponent 
            title="Zwelar | Aprenda Linguas nacionais"
            nameMeta="Sobre o site"
            descMeta = "O melhor e site para aprender línguas nacionais"

          />
          {/* Partners */}
          <div className="flex items-center justify-center gap-x-5 md:gap-x-11 py-3 flex-wrap bg-slate-900 w-full md:h-32 font-mulish">
            <p className="text-x md:text-2xl text-white">bantu.io</p>
            <p className='text-x md:text-2xl text-white font-bold'>ANGOPOLYGLOT</p>
          </div>


          <div className="flex flex-col items-center justify-center p-4 mt-6">
            <h2 className="w-[250px] md:w-[440px] text-center font-mulish text-slate-900 text-x md:text-3xl">
              Aprender Línguas nacionais nunca foi tão fácil!
            </h2>
            <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-center mt-8 md:12">
              <div className="bg-[url('/landing-images/kid.jpg')] w-60 h-60 md:w-80 md:h-80 bg-cover border-slate-100 rounded-sm shadow-2xl"></div>
              <div className="md:ml-8 mt-12">
                <ul className="">
                  <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      className="text-gray-300 mr-2"
                    />
                    <li className="text-[14px] md:text-lg lg:text-xl text-gray-800 font-normal font-mulish">
                      Aprenda dentro e fora de Angola, e acabaram-se as desculpas
                    </li>
                  </div>
                  <div className="mt-3 flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      className="text-gray-300 mr-2"
                    />
                    <li className="text-[14px] md:text-lg lg:text-xl text-gray-800 font-normal font-mulish">
                      Aprenda na sua casa de casa, no seu{" "}
                      <strong>computador</strong> ou seu <strong>telefone</strong>
                    </li>
                  </div>
                  <div className="mt-2 flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      className="text-gray-300 mr-2"
                    />
                    <li className="text-[14px] md:text-lg lg:text-xl text-gray-800 font-normal font-mulish">
                      Pratique a quelaquer momento, sobre o que aprendeu
                    </li>
                  </div>
                  <div className="mt-2 flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      className="text-gray-300 mr-2"
                    />
                    <li className="text-[14px] md:text-lg lg:text-xl text-gray-800 font-normal font-mulish">
                      Partilha com seus amigos e familiares, o quanto tens{" "}
                      <i>Zuelado</i>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          {/* Pratice  */}
          <div className="w-full flex flex-col justify-center items-center p-4 mt-10 bg-slate-900">
            <h2 className="text-x md:w-[440px] text-center text-white md:text-3xl mb-4 mt-4 font-mulish">
              Criado com foco no seu nível de entendimento
            </h2>
            <div className="flex flex-col lg:grid lg:grid-cols-3 md:grid md:grid-cols-2  md:gap-10 mb-8">
              <div className="flex flex-col items-center gap-2 md:gap-4 border border-[#232e36] h-[fit-content] md:h-60  mt-4 p-4">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-green-300 mr-2 mb-1"
                  size="2x"
                />
                <p className="text-xl text-white font-semibold font-mulish">Olhe</p>
                <p className="text-[14px] text-white text-justify md:text-sm font-mulish">
                  Olhe atentamente para as imagens, isso lhe ajuda a criar quandos
                  mentais enquanto ouve o significado de cada palavra
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-4 border border-[#232e36] h-[fit-content] md:h-60  mt-4 p-4">
                <FontAwesomeIcon
                  icon={faHeadphones}
                  className="text-green-300 mr-2 mb-1"
                  size="2x"
                />
                <p className="text-xl text-white font-semibold font-mulish">Pratique</p>
                <p className="text-[14px] text-white  text-justify md:text-sm font-mulish">
                  Praticar é a melhor forma de aprender, aqui você vai praticar nos
                  sentidos da audição.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-4 border border-[#232e36] h-[fit-content] md:h-60 mt-4 p-4">
                <FontAwesomeIcon
                  icon={faVolumeUp}
                  className="text-green-300 mr-2 mb-1"
                  size="2x"
                />
                <p className="text-xl text-white font-semibold font-mulish">Fale</p>
                <p className="text-[14px] text-white md:text-sm text-justify font-mulish">
                  Por ser uma língua bantu interpretada, têm palavras com
                  acentuações tónicas que se mal ditas/acentuadas podem ter outro
                  significado e sentido.
                </p>
              </div>
            </div>
          </div>
          {/* Family */}
          <div className="flex justify-start bg-slate-100 ">
            <div className="hidden md:flex md:bg-[url('/landing-images/children.jpg')] w-[700px] h-[500px] bg-cover border-slate-100 "></div>
            <div className="w-[700px] flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="text-slate-800 mr-2 mt-4"
                size="2x"
              />
              <h2 className="text-x md:w-[440px] text-center font-bold text-slate-900 md:text-3xl mb-4 mt-4 font-mulish">
                Aprenda na diáspora
              </h2>
              <p className="text-[14px] md:text-lg p-4 mt-[-28px] text-center font-mulish">
                O Zuelar permite que filhos de descendentes de reis e afro descentes
                aprendam a língua dos seus ancestrais aonde quer que estejam.
                Afro-brasileiros e Angolanos nascidos em Portugal podem
                reconectar-se com sua terra mãe.
              </p>
            </div>
          </div>
          {/* Music section */}
          <div className="flex flex-col items-center justify-center gap-2 p-4 drop-shadow-2xl md:mt-12">
            <h2 className="w-[fit-content]  text-center text-slate-900 text-x md:text-3xl mb-4 mt-4 font-mulish">
              Oiça músicas na língua nacional kimbundu{" "} <br/>
              <strong>e veja suas traduções</strong>
            </h2>
            {/* text-3xl  */}
            <div className="w-full flex flex-col md:flex md:flex-row items-center mt-4 p-4 h-[fit-content]">
            <div className="w-[250px] md:w-[400px]">
                <Image
                  width={500}
                  height={700}
                  quality={90}
                  alt="Ouvir música"
                  src="/landing-images/sing.png"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-[14px] md:text-xl md:w-[fit-content] md:ml-12 md:mb-36 md:mt-24 text-slate-900 mt-2 font-bold font-mulish">
                Todo usuário que entende pode adicionar letras de músicas
              </p>
            </div>
          </div>
        </>
      );
}
