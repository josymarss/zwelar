import styles from './numbers.module.css';

import { dataNumbersOrdinals } from './ordinalnumbers';
import NumberComponent from "./numbercomponent";

export default function Ordinals(){
      return(
            <div className={styles.container}>
                  <h2>Números ordinais</h2>
                  {dataNumbersOrdinals.map(number => 
                       <NumberComponent number={number.key} value={number.value} /> 
                  )}
            </div>
      );
}