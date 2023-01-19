import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DetailCOurse(){
    const router = useRouter();
    const { data } = router.query;

    useEffect(() => {
       
    },[]);

    return(
        <div className="mt-10 flex flex'col items-center justify-center">
            <p className='text-3xl font-bold text-red-600'>{data}</p>
        </div>
    );
}