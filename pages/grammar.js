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
           <div className={grammar.alphabet}>
                {alphabet.map((letter,index) => (
                    <p key={index}>{letter}</p>
                ))}  
           </div>
        </div>
    )
}