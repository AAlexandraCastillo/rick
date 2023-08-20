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
const EMAIL ='casstlealexandra@gmail.com';
const PASSWORD='12345';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
   const[characters, setCharacters]= useState([]);
   const{pathname}=useLocation();

const navigate = useNavigate();
const [access, setAccess] = useState(false);



function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};
useEffect(() => {
   !access && navigate('/');
}, [access]);


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   
   function onClose(id){
      setCharacters(characters.filter((char)=>{ char.id !== parseInt(id)} 
   ))}
   
   return (
      <div className={style.miDiv}>
{ pathname !=='/' && <NavBar onSearch={onSearch}/>}

        <Routes>
         <Route path="/"   element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards characters={characters}
      onClose={onClose} />}></Route>   
      <Route path="/about"  element={<About/>}/>  
      <Route  path="/detail/:id"  element={<Detail/>}/>  
                      
        </Routes>      
          </div>


   );
}

export default App;
