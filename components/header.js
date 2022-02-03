import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css'

export function Header (){
    
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
        <header className={styles.header}>
            <h2>
                <Link href='/'>Wana Kimbumdu</Link>
            </h2>
            <ul>
                <li>
                    <Link href='/'>{`Home`}</Link>
                </li>
                <li>
                    <Link href='/grammar/grammar'>{`Gramática`}</Link>
                </li>
                <li>
                    <Link href='/about/about'>Sobre</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCodeBranch}>
                    </FontAwesomeIcon>
                    <span><Link href='https://github.com/josymarss/kimbundu-technical-expressions'>Github</Link></span>
                </li>
            </ul>
            <div className={styles.searchSection}>
                <input 
                    type='text' 
                    name='search' 
                    placeholder='Sugerir palavra'
                />
                <button onClick={onSugerir}>Sugerir</button>
            </div>
        </header>
    )
}