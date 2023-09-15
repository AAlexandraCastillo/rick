import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

const Cards = ({characters, onClose}) => {
   return (<div className={style.miDiv}>
    

{   characters.map(({id,name,species,gender,image,origin,status})=>{
         return( 
            <div className={style.card}>
         <Card 
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         status={status}
         origin={origin.name}
         onClose={onClose}
         />
         </div>

        
         )
})
} </div>);
}
export default Cards;