import { useState, useEffect, Fragment } from 'react';

import styles from './styles.module.css';
import { Header } from '../components/header';
import { data } from '../data';

export default function TranslationPage(){
    const [datafetched, updateDate] = useState([]);
    const [search, updateSearch] = useState('');
    
    useEffect(() => {
        updateDate(data);
    },[]);

    useEffect(()=>{
        
    },[datafetched]);

    const onBuscar = () =>{
        updateDate(data.
            filter(elem => elem.word === search || 
                elem.word.toLocaleLowerCase() === search ||
                 elem.word.toUpperCase() === search) ||
                 elem.word.toLocaleLowerCase() === search.toLocaleLowerCase());
    }
    
    const MyData = ()=>(
        datafetched.map((data,index) => (
            <>
                <p className={styles.title}>{data.word}</p>
                <div className={styles.words} key={index}>
                    <p>{data.translation}</p>
                </div>
               { data.description ?
                    <>
                        <p className={styles.title}>Description</p>
                        <div className={styles.words} key={index}>
                            <p>{data.description}</p>
                        </div>
                    </>: ""
                }
            </>
        ))     
    );
    
    return(
        <div className={styles.container}>
             <div className={styles.search}>
                <input 
                    type='text' 
                    placeholder='Procurar palavra' 
                    onChange={e => updateSearch(e.target.value)}
                />
                <button onClick={onBuscar}>Buscar</button>
            </div>
            <h2>Traduções</h2>
            
            <MyData />

        </div>
    );
}