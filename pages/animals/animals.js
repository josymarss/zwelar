import styles from '../showomponent/show.module.css';
import { dataAnimals } from '../../data/dataanimals';
import ShowAndListComponent from '../showomponent/showandlistten';
import CardImage from '../../components/cardimage';

export default function Animals(){
      return (
            <div className=' bg-red-200'>
                  <h2 className='text-xl'>Animais em kimbundu</h2>
                  <CardImage altImage='/dog.png'/>
                  {dataAnimals.map((number,index) => 
                        <ShowAndListComponent key={index} number={number.key} value={number.value} />
                  )}
            </div>
      );
}