import { useState,useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import grammar from './grammar.module.css';

export default function Grammar(){
    const router = useRouter();

    return(
        <div className={grammar.container}>
            <h2>Tópicos</h2>
            <ul>
                <li onClick={() => router.push('/alfabeth/alfabeth')}>
                    <span>Alfabeto e pronúncia</span>
                </li>
                <li>
                    Números
                        <ul>
                            <li onClick={() => router.push('/numbers/cardinals')}>
                                    <span>Cardinais</span>
                            </li>
                            <li onClick={() => router.push('/numbers/ordinals')}>
                                <span>Ordinais</span>
                            </li>
                        </ul>
                </li>
                    <li><span>Animais</span></li>
                    <li><span>Familiares</span></li>
                    <li><span>Saudações</span></li>
                    <li><span>Perguntas</span></li>
                    <li onClick ={() => router.push('/plural/plural')}><span>O plural em kimbundu</span></li>
            </ul>
        </div>
    )
}