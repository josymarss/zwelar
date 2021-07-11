import Link from 'next/link'

import grammar from './grammar.module.css'

export default function Grammar(){
    return(
        <div className={grammar.container}>
            <p>Página em construção.</p>
            <p>
                <Link href='/translations'>
                    {`Página estará disponível em breve.`}
                </Link>
                <span>{` retornar para a página inicial`}</span>
            </p>
        </div>
    )
}