import {useState} from 'react'
import style from './About.module.css'
const About=()=>{
    const [rotar, setRotar] = useState(false);

  const manejarClic = () => {
    setRotar(true);
  }
return( 

<div className={style.miDiv}>
 <hr/>
    <img 
     onClick={manejarClic}
     className={`${style.miImagen} ${rotar ? style.rotar : ''}`}
     src="/angie.jpg"
     alt="Sobre mí"
/>
<p className={style.color}>NOMBRE:Angie Castillo</p>

    
</div>
    

)
}


export default About;