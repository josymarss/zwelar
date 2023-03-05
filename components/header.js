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
    faInfo
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
    }
    const NavItems = ({style}) => {
         return (
            <nav className='w-full  md:flex'>
                    <ul className='flex flex-row justify-center gap-[1rem] w-full'>
                        <li className=" text-md header-li">
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
                        <li className="header-li">
                            <span>
                            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                            </span>
                        </li>
                    </ul>
                </nav>
         );
    }

    return(
        <>
        <header className='sticky top-0 z-40 bg-slate-100 px-2 flex flex-col  justify-between items-center w-full h-[100px] lg:h-[90px] shadow-lg font-mulish'>
            <div className='flex  flex-row justify-between w-full'>
                    <h2 className="font-bold  ml-[1.5rem] mt-1 text-2xl text-slate-800">
                        <Link href='/'>Zwelar</Link>
                    </h2>
                    <button className='w-[fit-content] hover:text-[blue] mt-1 font-bold  p-1 rounded-[5px] text-black  bg-green-400 text-[11px]' 
                            onClick={onSugerir}>Sugerir Palavras
                    </button>
            </div>
            <div className='flex w-full md:flex-row py-2 gap-4'>
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