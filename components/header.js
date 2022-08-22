import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCodeBranch, faMoon } from "theme-ui";
import { Input,Button } from 'theme-ui';
import { useRouter } from 'next/router'

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
        <header className='px-5 flex items-center justify-between flex-row w-full h-[60px] shadow-lg'>
            <h2 className="font-bold text-2xl text-green-400">
                <Link href='/'>Zuelar</Link>
            </h2>
            <nav>
            <ul className=' flex flex-row gap-14'>
                <li className="uppercase text-md hover:text-green-400">
                    <Link href='/'>{`Home`}</Link>
                </li>
                <li className="uppercase text-md hover:text-green-400">
                    <Link href='/grammar/grammar'>{`Gramática`}</Link>
                </li>
                <li className="uppercase text-md hover:text-green-400">
                    <Link href='/grammar/grammar'>{`Música`}</Link>
                </li>
                <li className="uppercase text-md hover:text-green-400">
                    <Link href='/about/about'>Sobre</Link>
                </li>
                <li  className="uppercase text-md hover:text-green-400">
                    <Link href='/team/team'>Criadores</Link>
                </li>
                <li  className="uppercase text-md hover:text-green-400">
                    <span className='mr-2'>
                        <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                    </span>
                    <span className='mr-4'>
                        <Link href='https://github.com/josymarss/kimbundu-technical-expressions'>
                            <a target="_blank">Github</a>
                        </Link>
                    </span>
                    <span className='mr-2'>
                        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    </span>
                    
                    
                </li>
            </ul>
            </nav>
            <div className=''>
                <Input 
                    type='text' 
                    name='search' 
                    placeholder='Sugerir palavra'
                />
                <button onClick={onSugerir}>Sugerir</button>
            </div>
        </header>
        {router.pathname === '/' ?
                <div className=" flex justify-between relative w-full bg-cover bg-[url('/bg-image.png')] bg-no-repeat h-[389px]">
                <img
                    className='absolute -top-16 right-20'
                    alt='Mulher zuela kimbundu' 
                    src='/girl.png'
                />
                <div className="flex flex-col justify-center  items-center bg-color-red-400">
                    <h2 className='w-[380px] ml-10 mt-4 inline-block font-semibold font-sans text-3xl text-white'>Está mais do que na hora, de você <span className="text-green-400">zuelar</span> kimbundu</h2>
                    <Button variant='secondary'>Iniciar</Button>
                </div>
            </div> : ''
        }
        </>
    )
}