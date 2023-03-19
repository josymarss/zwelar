import React, {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMoon,
    faCodeBranch, 
    faHome,
    faBook,
    faMusic,
    faHistory,
    faCode,
    faUser,
    faBrain,
    faInfo,
    faWindowClose,
    faBars
} from "@fortawesome/free-solid-svg-icons";// Import the FontAwesomeIcon component
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


import Banner from './banner'; 

export function Header (){
    const router = useRouter();
    const [toggleMenu, setToggleMenu] = useState(false);
    

    const onSugerir = (e) =>{
        // const value = e.target.value
        // if (value !== ''){
        //     const pyShell = new PythonShell('suggestion.py')
        //     pyShell.send(value)
        //     pyShell.end((err, code, signal) => {
        //        // 
        //        err? console.log('Some error ocurred!') : 'Good!!'
        //     })
        // }
    }
    const toggleMenuHandler = ()=>{
         console.log("cliked")
         setToggleMenu(!toggleMenu)
    }
    const NavItems = ({style}) => {
         return (
            <nav className={`${toggleMenu ?'hidden':'flex'} w-full  mt-[-530px] border-t flex flex-col gap-4 border-t-[#232e36]  md:border-0 md:mt-0 `}>
                    <div className='self-end mt-2 flex md:hidden '>
                       <span onClick={toggleMenuHandler}> 
                            <FontAwesomeIcon 
                                className='text-red-600 cursor-pointer' 
                                size='lg' 
                                icon={faWindowClose}>
                            </FontAwesomeIcon>
                      </span> 
                    </div>
                    <ul className={`flex flex-col h-full  md:p-0 md:bg-[transparent] md:flex-row  md:justify-center gap-[1rem] w-full`}>
                        <li className="text-md header-li">
                            <Link href='/'> 
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faHome}></FontAwesomeIcon></span>
                                    <span>Home</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/grammar/grammar'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faBook}></FontAwesomeIcon></span>
                                    <span>Gramática</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/music'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faMusic}></FontAwesomeIcon></span>
                                    <span>Música</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/history'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faHistory}></FontAwesomeIcon></span>
                                    <span>Histórias</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/courses'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faBrain}></FontAwesomeIcon></span>
                                    <span>Cursos</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/about/about'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faInfo}></FontAwesomeIcon></span>
                                    <span>Sobre</span>
                                </span>
                            </Link>  
                        </li>
                        <li  className="header-li">
                            <Link href='/team'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faCode}></FontAwesomeIcon></span>
                                    <span>Criadores</span>
                                </span>
                            </Link>
                        </li>
                        <li  className="header-li">
                            <Link href='#'>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faUser}></FontAwesomeIcon></span>
                                    <span>Perfil</span>
                                </span>
                            </Link>
                        </li>
                        {/* <li  className="flex header-li">
                                <Link href='https://github.com/josymarss/kimbundu-technical-expressions'>
                                <span className='header-li-span'>
                                     <span><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon></span>
                                     <span><a target="_blank">Github</a></span>
                                </span> 
                                </Link>
                        </li> */}
                        {/* <li className="header-li">
                            <span>
                            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                            </span>
                        </li> */}
                    </ul>
                </nav>
         );
    }

    return(
        <>
            <header className={`sticky top-0 z-40 bg-slate-100 px-2 flex flex-col  justify-between items-center w-full ${toggleMenu ? 'h-fit' : 'h-[100vh]'} md:h-[90px] shadow-lg font-mulish`}>
                <div className='flex h-fit flex-row justify-between w-full flex-wrap'>
                        <h2 className="font-bold text-xl ml-[1.5rem] mt-1 md:text-2xl text-slate-800">
                            <Link href='/'>Zwelar</Link>
                        </h2>
                        <div className='flex flex-row-reverse justify-between gap-4 items-center md:flex-row'>
                            <span onClick={toggleMenuHandler} className='header-li mt-2 flex md:hidden'>
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </span>
                            <span className='header-li mt-2 '>
                                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                            </span>
                            <button className='w-[fit-content] hover:text-[blue] mt-1 font-bold  p-1 rounded-[5px] text-black  bg-green-400 text-[11px]' 
                                    onClick={onSugerir}>Sugerir Palavras
                            </button>
                        </div>
                </div>
                <div className='flex w-full  flex-row py-2 gap-4'>
                    {/* <span className='flex md:hidden' onClick={toggleMenuHandler}><span><FontAwesomeIcon size='lg' icon={faHome}></FontAwesomeIcon></span></span> */}
                        <NavItems />
                    {/* <div className='flex gap-1 hiden mid:flex  md:w-[30%]'>
                        <input 
                            className='p-1 outline-none rounded-[5px] md:rounded-full text-center text-[13px] w-[60%]'
                            type='text' 
                            name='search' 
                            placeholder='Sugerir palavra'
                        />
                    </div> */}
                </div>
            </header>
        {router.pathname === '/' ?
            <Banner />
            : ''
        }
        </>
    )
}