import React from 'react';
import Image from 'next/image';
import { faDotCircle, faEye, faHeadphones, faVolumeUp, faLocationArrow  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Leading (){
    return(
        <>
            <div className="flex flex-col items-center justify-center p-4 mt-6">
                <h2 className="w-96 text-center mb-4 font-bold text-3xl text-slate-700">Aprender kimbundu nunca foi tão fácil</h2>
                    <div className="flex flex-row items-center mt-12">
                        <div className=''>
                            <div className="bg-[url('/kid.jpg')] w-80 h-80 bg-cover border-slate-100 rounded-sm shadow-2xl">
                            </div>
                        </div>
                        <div className='ml-8'>
                            <ul>
                                <div className='flex flex-row items-center'>
                                    <FontAwesomeIcon icon={faDotCircle} className="text-gray-300 mr-2"/>
                                    <li className="text-xl text-gray-800 font-normal">Aprenda dentro e fora de Angola, e acabaram-se as desculpas</li>
                                </div>
                                <div className='mt-3 flex flex-row items-center'>
                                    <FontAwesomeIcon icon={faDotCircle} className="text-gray-300 mr-2"/>
                                    <li className="text-xl text-gray-800 font-normal">Aprenda na sua casa de casa, no seu <strong>computador</strong> ou seu <strong>telefone</strong></li>
                                </div>
                                <div className='mt-2 flex flex-row items-center'>
                                    <FontAwesomeIcon icon={faDotCircle} className="text-gray-300 mr-2"/>
                                    <li className="text-xl text-gray-800 font-normal">Pratique a quelaquer momento, sobre o que aprendeu</li>
                                </div>
                                <div className='mt-2 flex flex-row items-center'>
                                    <FontAwesomeIcon icon={faDotCircle} className="text-gray-300 mr-2"/>
                                    <li className="text-xl text-gray-800 font-normal">Partilha com seus amigos e familiares, o quanto tens <i>Zuelado</i></li>
                                </div>
                            </ul>
                        </div>
                    </div>
            </div>
            {/* Pratice  */}
            <div className="flex flex-col justify-center items-center p-4 mt-24 bg-slate-900">
                <h2 className="w-96 text-center text-white font-semibold text-3xl mb-4 mt-4 ">Feito focando no seu aprendizado</h2>
                <div className="flex flex-row gap-10 mb-8 ">
                    <div className="flex flex-col items-center gap-4 border border-[#232e36] w-96 h-96 mt-12 p-4">
                        <FontAwesomeIcon icon={faEye} className="text-green-300 text-5xl mr-2"/>
                        <p className="text-white font-semibold text-2xl">Olhe</p>
                        <p className='text-white text-center text-lg'>Olhe atentamente para as imagens, isso lhe ajuda a criar quandos mentais enquand ouve o significado sde cada palavra</p>
                    </div>
                    <div className=" flex flex-col items-center gap-4 border border-[#232e36] w-96 h-96 mt-12 p-4">
                        <FontAwesomeIcon icon={faHeadphones} className="text-green-300 text-5xl mr-2"/>
                        <p className="text-white font-semibold text-2xl">Pratique</p>
                        <p className='text-white text-center text-lg'>Praticar é a melhor forma de aprender, aqui você vai praticar nos sentidos da audição.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 border border-[#232e36] w-96 h-96 mt-12 p-4">
                        <FontAwesomeIcon icon={faVolumeUp} className="text-green-300 text-5xl mr-2"/>
                        <p className="text-white font-semibold text-2xl">Fale</p>
                        <p className='text-white text-center text-lg'>Por ser uma língua bantu e interpretada, a pessoa que está a estudar precisa repetir muito, uma vez que têm palavras com acentuações que tónicas e que se mal ditas/acentuadas podem ter outro significado.</p>
                    </div>
                </div>
            </div>
            {/* Family */}
            <div className="flex justify-start bg-slate-100 ">
                <div className=" bg-[url('/children.jpg')] w-[700px] h-[500px] bg-cover border-slate-100 ">
                </div>
                <div className='w-[700px] flex flex-col items-center justify-center'>
                    <FontAwesomeIcon icon={faLocationArrow} className="text-slate-800 text-7xl mr-2"/>
                    <h2 className="text-semibold text-3xl">Aprenda na diáspora</h2>
                    <p className='mt-4 p-4 text-lg text-center'>O Zuelar permite que filhos de descendentes de reis e afro descentes aprendam a língua dos seus ancestrais aonde quer que estejam. Afro-brasileiros e Angolanos nascidos em Portugal podem reconectar-se com sua terra mãe.</p>
                    
                </div>
            </div>
            {/* Music section */}
            <div className='flex flex-col items-center justify-center mt-12 gap-2 p-4 rounded-sm drop-shadow-2xl'>
                <h2 className='w-[440px] text-center text-slate-700 font-semibold text-3xl mb-4 mt-4 '>Oiça músicas em língua nacional kimbundu e veja suas traduções</h2>
                <div className='gap-4 flex flex-row items-center mt-4'>
                <div className="w-[500px] h-[400px]">
                        <img src='/listen.jpg'/>
                    </div>
                    <p className="w-96 text-center text-2xl text-gray-800 font-normal mb-4 ml-30">Todo usuário que entende pode adicionar letras de músicas</p>
                    
                </div>

            </div>
        </>
    );
}