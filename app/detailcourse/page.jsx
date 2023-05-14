"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function DetailCOurse(){
    const router = useRouter();
    // const { data } = router.query;

    useEffect(() => {
       
    },[]);

    return(
        <div className="mt-10 flex flex'col items-center justify-center font-mulish">
            <p className='text-3xl font-bold text-red-600'>{"data"}</p>
        </div>
    );
}
export default  DetailCOurse;