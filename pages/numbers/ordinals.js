import styles from '../showomponent/show.module.css';

import { dataNumbersOrdinals } from '../../data/ordinalnumbers';
import ShowAndListComponent from "../showomponent/showandlistten";

export default function Ordinals(){
      return(
            <div className={styles.container}>
                  <h2>Números ordinais</h2>
                  {dataNumbersOrdinals.map((number,index) => 
                       <ShowAndListComponent key={index} number={number.key} value={number.value} /> 
                  )}
            </div>
      );
}