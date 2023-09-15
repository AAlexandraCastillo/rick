import {Routes, Route, useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import style from './App.module.css'
import {useState, useEffect} from 'react';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/favorites.jsx'


function App() {
   const[characters, setCharacters]= useState([]);
   const{pathname}=useLocation();

const navigate = useNavigate();
const [access, setAccess] = useState(true);

async function login(userData) {
   try{
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   const response= await axios(URL + `?email=${email}&password=${password}`) ;
      const { access } =response.data;
      setAccess(response.data);
      access && navigate('/home');
   }
   catch(error){ window.alert('Hubo un error en el login')}
}


useEffect(() => {
   !access && navigate('/');
}, [access,navigate]);


   async function onSearch(id) {
      try{
     const{data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }}
      catch(error){ window.alert('Hubo un error con el personaje')}
   };
   
   function onClose(id){
      setCharacters(characters.filter(char=> char.id !== parseInt(id) 
   ))};
   
   return (
      <div className={style.miDiv}>
{ pathname !=='/' && <NavBar onSearch={onSearch}/>}

        <Routes>
         <Route path="/"   element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards characters={characters}
      onClose={onClose} />}></Route>   
      <Route path="/about"  element={<About/>}/>  
      <Route  path="/detail/:id"  element={<Detail/>}/>  
      <Route path="/favorites" element={<Favorites/>}/>
   </Routes>      
          </div>


   );
}

export default App;
