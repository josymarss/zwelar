import NumberComponent from './numbercomponent';
import styles from './numbers.module.css';
import { dataNumbers } from '../../cardinalnumbers';

export default function Cardinals( ){
      return(
            <div className={styles.container}>
                  <h2>Números Cardinais em kimbundu</h2>
                  {dataNumbers.map((number,index) => 
                        <NumberComponent key={index} number={number.key} value={number.value} />
                  )}
                  
            </div>
      );
}

