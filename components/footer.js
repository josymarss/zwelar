import { useRouter } from 'next/router';
import styles from './styles.module.css';


export default function Footer (){
    const router = useRouter();

    return(
         
            <footer className='flex justify-center bg-slate-800'>
                {router.pathname === '/' ? 
                    <div className="flex items-end justify-center p-4">
                        <p className="text-semibold text-md text-white">{`@bantu.io ${new Date().getFullYear()}`}</p>
                    </div> : ''
                }
            </footer> 
    )
}