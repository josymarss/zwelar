import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import styles from './numbers.module.css';

export default function NumberComponent({ number, value }){
      return(
            <div className={styles.wrap}>
                  <div className={styles.number}>
                        <span>
                              <FontAwesomeIcon icon={faVolumeUp} size={20} color='#rgb(24, 24, 24);'/>
                        </span> 
                        <p>{ number }</p>
                  </div>       
                  <p className={styles.description}> - { value }</p>
            </div>
      );
}