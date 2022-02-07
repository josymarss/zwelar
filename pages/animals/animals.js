import styles from '../showomponent/show.module.css';
import { dataAnimals } from '../../data/dataanimals';
import ShowAndListComponent from '../showomponent/showandlistten';

export default function Animals(){
      return (
            <div className={styles. container}>
                  <h2>Animais em kimbundu</h2>
                  {dataAnimals.map((number,index) => 
                        <ShowAndListComponent key={index} number={number.key} value={number.value} />
                  )}
            </div>
      );
}