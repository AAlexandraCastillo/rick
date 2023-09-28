import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar=({onSearch}) =>{
   const[id, setId]= useState('');
   const handleChange=(event)=>{ 
    setId(event.target.value)
   };
   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button className={style.button}  onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
export default SearchBar;