import styles from '../showomponent/show.module.css';

import { dataNumbersOrdinals } from '../../data/ordinalnumbers';
import ShowAndListComponent from "../showomponent/showandlistten";

export default function Ordinals(){
      return(
            <div className='p-10 font-mulish'>
                  <h2 className='font-semibold text-3xl border-b p-2 mb-10'>Números ordinais</h2>
                  {dataNumbersOrdinals.map((number,index) => 
                       <ShowAndListComponent key={index} number={number.key} value={number.value} /> 
                  )}
            </div>
      );
}