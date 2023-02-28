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
    faUser
} from "@fortawesome/free-solid-svg-icons";// Import the FontAwesomeIcon component
import { useRouter } from 'next/router';

import Banner from './banner';

export function Header (){
    const router = useRouter();
    
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

    return(
        <>
        <header className='sticky top-0 z-40 bg-slate-100 px-5 flex items-center w-full h-[60px] shadow-lg font-mulish'>
            <h2 className="font-bold text-2xl text-slate-800 w-[10%]">
                <Link href='/'>Zwelar</Link>
            </h2>
            <div className='flex justify-between w-full'>
                <nav className='w-[80%]'>
                    <ul className='flex flex-row gap-[1rem]'>
                        <li className=" text-md header-li">
                            <Link href='/'> 
                            <span className='header-li-span'>
                                <FontAwesomeIcon size='lg' icon={faHome}></FontAwesomeIcon>
                                <span>Home</span>
                            </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/grammar/grammar'>
                                <span className='header-li-span'>
                                    <FontAwesomeIcon size='lg' icon={faBook}></FontAwesomeIcon>
                                    <span>Gramática</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/music'>
                                <span className='header-li-span'>
                                    <FontAwesomeIcon size='lg' icon={faMusic}></FontAwesomeIcon>
                                    <span>Música</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/history'>
                                <span className='header-li-span'>
                                    <FontAwesomeIcon size='lg' icon={faHistory}></FontAwesomeIcon>
                                    <span>História</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/courses'>{`Cursos`}</Link>
                        </li>
                        <li className="header-li">
                            <Link href='/about/about'>Sobre</Link>
                        </li>
                        <li  className="header-li">
                            <Link href='/team'>
                                <span className='header-li-span'>
                                    <FontAwesomeIcon size='lg' icon={faCode}></FontAwesomeIcon>
                                    <span>Criadores</span>
                                </span>
                            </Link>
                        </li>
                        <li  className="header-li">
                            <Link href='#'>
                                <span className='header-li-span'>
                                    <FontAwesomeIcon size='lg' icon={faUser}></FontAwesomeIcon>
                                    <span>Perfil</span>
                                </span>
                            </Link>
                        </li>
                        <li  className="flex header-li">
                                <Link href='https://github.com/josymarss/kimbundu-technical-expressions'>
                                <span className='header-li-span'>
                                    <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                                     <span><a target="_blank">Github</a></span>
                                </span> 
                                </Link>
                        </li>
                        <li className="header-li">
                            <span>
                                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                            </span>
                        </li>
                    </ul>
                </nav>
                <div className='flex w-[20%]'>
                    <input 
                        className='p-1 outline-none rounded-full text-center text-[13px] w-[60%]'
                        type='text' 
                        name='search' 
                        placeholder='Sugerir palavra'
                    />
                    <button className='w-[30%] hover:text-white px-2 rounded-full text-black ml-2 bg-green-400 text-[12px] 'onClick={onSugerir}>Enviar</button>
                </div>
            </div>
        </header>
        {router.pathname === '/' ?
            <Banner />
            : ''
        }
        </>
    )
}