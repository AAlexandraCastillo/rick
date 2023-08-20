import style from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({id, name, status, species, gender, origin, image, 
onClose}) =>{
   return (
      
      <div className={style.card}>
      <img src={image} alt={name}/>
      < Link to={`/detail/${id}`}>
         <h2>Name:{name}</h2>
         </Link>
         <h2>Status:{status}</h2>
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         <h2>Origin:{origin}</h2>
         <button onClick={()=>onClose(id)}>close</button>
         </div>
         
   );
}
export default Card;
