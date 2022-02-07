import styles from '../showomponent/show.module.css';
import ShowAndListComponent from '../showomponent/showandlistten';
import { dataNumbers } from '../../data/cardinalnumbers';

export default function Cardinals( ){
      return(
            <div className={styles.container}>
                  <h2>Números Cardinais em kimbundu</h2>
                  {dataNumbers.map((number,index) => 
                        <ShowAndListComponent key={index} number={number.key} value={number.value} />
                  )}
                  
            </div>
      );
}

