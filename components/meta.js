import Head from 'next/head'

export function Meta({description,content}){
    return(
        <Head>
            <title>Kimbundu Tekh</title>
            <meta name={description} content={content} />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
    )
}