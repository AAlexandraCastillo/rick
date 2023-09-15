import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { addFav,removeFav } from '../../redux/actions';
import {connect} from 'react-redux'
import {useState, useEffect} from 'react';

const Card = ({id, name, status, species, gender, origin, image, 
onClose,removeFav,addFav,myFavorites}) =>{
           const[isFav,setIsFav]=useState(false)
const handleFavorite=()=>{
   isFav? removeFav(id) :addFav({id, name, status, species, gender, origin, image,onClose})
setIsFav(!isFav)
}
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={style.Card} > 
      <div  >
      
         {(
           <button onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
        ) }
        
       <h2>{id}</h2>  
      < Link to={`/detail/${id}`}>
      
      <img src={image} alt={name}/>
         <h2>{name}</h2> 
         <h2>Status:{status}</h2>
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         <h2>Origin:{origin}</h2>
         <button onClick={()=>onClose(id)}>close</button>
         </Link>
         </div>
         </div>
   );
}
const mapDispatchToProps=(dispatch)=>{
   return{
   removeFav:(id)=> dispatch(removeFav(id)) ,
   addFav:(character)=> dispatch(addFav(character))
}}

const mapStateToProps=(state)=>{
   return{
   myFavorites:state.myFavorites
}}
export default connect (mapStateToProps,mapDispatchToProps)(Card);
