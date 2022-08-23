import styles from '../showomponent/show.module.css';
import { dataAnimals } from '../../data/dataanimals';
import CardImage from '../../components/cardimage';
import ButtonSound from '../../components/buttonsound';

export default function Animals(){
      return (<>
            <div className='flex flex-col p-10'>
                  <h2 className='font-semibold text-3xl border-b p-2 mb-10'>Animais em kimbundu</h2>
                  {/* search section */}
                  <div className='flex flex-row self-center gap-2 mb-10'>
                        <input className='w-[600px] p-2 border border-slate-200' 
                              type='text' 
                              name='search'
                              placeholder='Procurar por um animal'
                        />
                        <button className='p-2 bg-slate-700 text-white hover:bg-slate-600 '>Procurar</button>
                  </div>
                  <div className='flex flex-row flex-wrap gap-6'>
                        {
                              dataAnimals.map(animal => 
                                    <CardImage 
                                          name={animal.key} 
                                          translation={animal.value} 
                                          img={animal.image}
                                    />)
                        }
                  </div>
            </div>
            </>);
}