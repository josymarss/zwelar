import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css'

export function Header (){
    
    const onSugerir = () =>{
        console.log('Clicked!')
    }

    return(
        <header className={styles.header}>
            <h2>
                <Link href='/'>Kibumdu-tech</Link>
            </h2>
            <ul>
                <li>
                    <Link href='/grammar'>{`gramática`}</Link>
                </li>
                <li>
                    <Link href='/about'>sobre</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCodeBranch}>
                    </FontAwesomeIcon>
                    <span><Link href='https://github.com/josymarss/kimbundu-technical-expressions'>github</Link></span>
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