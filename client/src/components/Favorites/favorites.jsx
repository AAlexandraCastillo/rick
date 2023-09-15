 import {connect} from 'react-redux';
 import Card from '../Card/Card.jsx';
 import { filterCards, orderCards } from '../../redux/actions.js';
 import {useDispatch} from 'react-redux';
 import {useState} from 'react'

 const Favorites=({myFavorites})=>{
 const dispatch= useDispatch();
 const [aux,setAux]=useState(false);

 function handleOrder(evento){
   dispatch(orderCards(evento.target.value));
   setAux(true);
 };
 function handleFilter(evento){
   dispatch(filterCards(evento.target.value));
 }




    return (
      <div>
<div>
   <select name='order'defaultValue='orderChar' onChange={handleOrder}>
      <option value='orderChar' disabled='disabled'>Order...</option>
      <option value='ascendente'>Ascendente</option>
      <option value='descendente'>Descendente</option>
   </select>
   <select name='filter' onChange={handleFilter} defaultValue='All'>
   <option value='All'>All </option>
   <option value='Male'> Male</option>
   <option  value='Female'> Female</option>
   <option value='Genderless'> Genderless</option>
   <option value='unknow'> Unknow</option>
   </select>
</div>


        <div>
         {myFavorites?.map((favoritos) =>{
            return(
            <Card 
            key={favoritos.id}
            id={favoritos.id}
            name={favoritos.name}
            species={favoritos.species}
            gender={favoritos.gender}
            image={favoritos.image}
            status={favoritos.status}
            origin={favoritos.origin}
            // onClose={favoritos.onClose}
            
         /> )})}
        </div>
        </div>
    )
 }

 const mapStateToProps=(state)=>{
    return{
    myFavorites:state.myFavorites
     }}
 
 export default connect(mapStateToProps,null)(Favorites);