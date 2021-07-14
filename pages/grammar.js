import { useState,useEffect } from 'react'
import Link from 'next/link'

import grammar from './grammar.module.css'
import { datagrammar } from '../datagrammar'

export default function Grammar(){
    const [alphabet, setAlphabet] = useState([])
    
    useEffect(()=>{
        setAlphabet(datagrammar.alphabet)
    },[])

    return(
        <div className={grammar.container}>
           <h2>Alfabeto</h2>
           <p className={grammar.intro}>{`O Kimbudu n'ao possi algumas letras, tais como: 
               "C", "R", "G", "P" e "Q". A letra "g" e "p" são compostas
               como mostra o lfatbeto em baixo, elas torna-se "ng" e "ph"
               respetivamente. para palavras formadas com a letra "c" e "q"
                usa-se a letra "k" em seu lugar .`}</p>
           <div className={grammar.alphabet}>
                {alphabet.map((letter,index) => (
                    <p key={index}>{letter}</p>
                ))}  
           </div>
        </div>
    )
}