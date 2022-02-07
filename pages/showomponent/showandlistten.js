import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import styles from './show.module.css';

export default function ShowAndListComponent({ number, value }){
      return(
            <div className={styles.wrap}>
                  <div className={styles.number}>
                        <span>
                              <FontAwesomeIcon icon={faVolumeUp} size={20} color='#rgb(24, 24, 24);'/>
                        </span> 
                        <p className={number ? styles.paragraph: ''}>{ number }</p>
                  </div>       
                  <p className={!number ? styles.paragraph: styles.description}> { value }</p>
            </div>
      );
}