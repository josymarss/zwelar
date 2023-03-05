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
import { useState } from 'react';

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
            <nav className='w-full md:w-[70%] md:flex'>
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
        <header className='sticky top-0 z-40 bg-slate-100 px-2 flex flex-col  md:flex-row justify-between items-center w-full h-[90px] md:h-[70px] shadow-lg font-mulish'>
            <h2 className="font-bold text-2xl text-slate-800 w-[15%]">
                <Link href='/'>Zwelar</Link>
            </h2>
            <div className='flex w-full smr:bg-[#000]  md:bg-[#fff] lg:bg-[#ccc] md:flex-row py-2 md:w-[85%] gap-4'>
                {/* <span className='flex md:hidden' onClick={toggleMenuHandler}><span><FontAwesomeIcon size='lg' icon={faHome}></FontAwesomeIcon></span></span> */}
                    <NavItems />
                {/* <div className='flex gap-1 hiden mid:flex  md:w-[20%]'>
                    <input 
                        className='p-1 outline-none rounded-[5px] md:rounded-full text-center text-[13px] w-[60%]'
                        type='text' 
                        name='search' 
                        placeholder='Sugerir palavra'
                    />
                    <button className='w-[fit-content] hover:text-white  p-2 rounded-[5px] md:rounded-full text-black  bg-green-400 text-[12px] 'onClick={onSugerir}>Enviar</button>
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