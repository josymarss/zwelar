import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMoon,faCodeBranch } from "@fortawesome/free-solid-svg-icons";// Import the FontAwesomeIcon component
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
        <header className='sticky top-0 z-40 bg-slate-100 px-5 flex items-center justify-between flex-row w-full h-[60px] shadow-lg font-mulish'>
            <h2 className="font-bold text-2xl text-slate-800">
                <Link href='/'>Zwelar</Link>
            </h2>
            <nav>
            <ul className=' flex flex-row gap-[1.2rem]'>
                <li className=" text-md hover:text-green-400">
                    <Link href='/'>{`Home`}</Link>
                </li>
                <li className="text-md hover:text-green-400">
                    <Link href='/grammar/grammar'>{`Gramática`}</Link>
                </li>
                <li className="text-md hover:text-green-400">
                    <Link href='/music'>{`Música`}</Link>
                </li>
                <li className="text-md hover:text-green-400">
                    <Link href='/history'>{`Histórias`}</Link>
                </li>
                <li className="text-md hover:text-green-400">
                    <Link href='/courses'>{`Cursos`}</Link>
                </li>
                <li className=" text-md hover:text-green-400">
                    <Link href='/about/about'>Sobre</Link>
                </li>
                <li  className=" text-md hover:text-green-400">
                    <Link href='/team'>Criadores</Link>
                </li>
                <li  className=" text-md hover:text-green-400">
                    <Link href='#'>Perfil</Link>
                </li>
                <li  className="flex text-md hover:text-green-400">
                    <span className='mr-2'>
                        <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                    </span>
                    <span className=''>
                        <Link href='https://github.com/josymarss/kimbundu-technical-expressions'>
                            <a target="_blank">Github</a>
                        </Link>
                    </span> 
                </li>
                <li className="text-md hover:text-green-400">
                    <span className='mr-2'>
                        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    </span>
                </li>
            </ul>
            </nav>
            <div className='flex'>
                <input 
                    className='p-1 rounded-full text-center'
                    type='text' 
                    name='search' 
                    placeholder='Sugerir palavra'
                />
                <button className='w-[5rem] hover:text-white p-1 rounded-full text-black ml-2 bg-green-400'onClick={onSugerir}>Enviar</button>
            </div>
        </header>
        {router.pathname === '/' ?
            <Banner />
            : ''
        }
        </>
    )
}