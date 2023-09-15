import { ORDER } from "./actions";

const initialState={
    myFavorites:[], allCharacters:[]
}

 const reducer=(state=initialState, action)=>{
   switch(action.type){
    case 'ADD_FAV':return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case 'REMOVE_FAV':return { ...state, myFavorites: action.payload ,allCharacters:action.payload};

    case 'FILTER':{
        const filtered= state.allCharacters.filter(
            (char)=> char.gender === action.payload
        );
        return{
            ...state,
            myFavorites:action.payload === 'All'? state.allCharacters : filtered,
        }
    }
    case ORDER:
        const orderCharacter= state.myFavorites.sort((a,b)=>{
            if(action.paload === 'ascendentes'){
                return a.id - b.id;
          }
          else{ return b.id - a.id;}
        });
        return{
            ...state,
            myFavorites:[...orderCharacter],
        };


    default: return{...state}
   }
    
 }
 export default reducer;