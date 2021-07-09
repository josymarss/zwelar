import about from './about.module.css'

export default function About(){
    return(
        <div className={about.container}>
            <h2>Sobre a língua e Projecto.</h2>
            <p className={about.paragraph}>
                Este é um projecto que visa colocar o Kimbundu como uma língua 
                oficial em Angola, e nesta secção temos como prioridade traduzir 
                palavras do inglês técnico usado no mundo das tecnologias modernas,
                que não existem no actual idioma. Está começa por se trasncrever a visão de um aacordor ortográfico
                que achamos inexistente na língua. 
            </p>
            <p className={about.paragraph}>
                É uma das línguas bantas mais faladas em Angola,
                onde é uma das línguas nacionais. 
                O português tem muitos empréstimos lexicais desta 
                língua obtidos durante a colonização portuguesa do
                território angolano e através dos escravos angolanos
                levados para o Brasil. É falada por cerca de 3 000 000
                de pessoas em Angola como primeira ou segunda língua.
            </p>
            <p className={styles.paragraph}>
                O kimbundu é a língua da região de Luanda,
                Catete, Malanje e as áreas de fronteira no Norte
                 (Dembos - variante crioula kimbundu/kikongo) e
                  no Centro (Kuanza Sul - variante crioula 
                  kimbundu/umbundu). É falada por mais de um 
                  milhão e meio de pessoas. Faz parte da grande 
                  família de línguas africanas a que a partir do
                   século passado os europeus convencionaram 
                   chamar Bantu (bantu significa «pessoas», e 
                   é plural de muntu. Em Kimbundu mutu designa 
                   «pessoa», com o plural em atu).</p>
            
        </div>   
    )
}