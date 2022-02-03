import React,{ useState,useEffect } from 'react';

import alfabet from './alfabeth.module.css';
import { datagrammar } from '../../datagrammar';

export default function(){
      const [alphabet, setAlphabet] = useState([]);
    
      useEffect(()=>{
            setAlphabet(datagrammar.alphabet)
      },[]);
      
      return(
            <div className={alfabet.container}>
                  <h2>Alfabeto</h2>
                  <p className={alfabet.intro}>{`O Kimbudu não possi algumas letras, tais como: 
                        "C", "R", "G", "P" e "Q". A letra "g" e "p" são compostas
                        como mostra o alfatbeto abaixo. Elas tornan-se "ng" e "ph"
                        respetivamente. para palavras formadas com a letra "c" e "q"
                        usa-se a letra "k" em seu lugar .`}
                  </p>
                  <div className={alfabet.alphabet}>
                        {alphabet.map((letter,index) => (
                              <p key={index}>{letter}</p>
                        ))}  
                  </div>
                  <h2>Pronúncia</h2>
                  <p className={alfabet.intro}>{`
                  O kimbundu se fala do mesmo jeito que se pronúncia as suas letras e sílabas,
                  muito parecido com português e o alemão nesse quesito. Em baixo segue-se a 
                  tabela com as respectivas pronúncias de cada letra .`}
                  </p>
            </div>
      );
}