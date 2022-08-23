import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonSound({ size }){
    return(
        <FontAwesomeIcon className={`hover:text-slate-600 text-slate-700 text-[30px]`} icon={faVolumeUp} size={size} color='#rgb(24, 24, 24);'/>
    );
}