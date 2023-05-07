import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export default function ShowAndListComponent({ number, value }){
      return(
            <div className={`${styles.wrap} font-mulish`}>
                  <div className={styles.number}>
                        <span>
                              <FontAwesomeIcon icon={faVolumeUp} size={20} color='#rgb(24, 24, 24);'/>
                        </span> 
                        <div className="flex flex-row items-center">
                              <p className={number ? styles.paragraph: ''}>{ number }</p>
                              <p className={!number ? styles.paragraph: styles.description}> { value }</p>
                        </div>

                  </div>  
            </div>
      );
}