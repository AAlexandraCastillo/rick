import {Link, NavLink} from 'react-router-dom';
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";
const NavBar= ({onSearch})=>{
    return(
        <div className={style.container}>
          <SearchBar onSearch={onSearch}/>

          <Link to='/home'>
             <button clasName={style.margen}>Home</button>
          </Link>
          <NavLink to='/about'>
             <button className={style.margen}>About</button>
          </NavLink>


</div>
    )
};
export default NavBar;
