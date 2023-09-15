const axios=require('axios')

const getCharById= async (req,res)=>{
   try{
   const {id}=req.params;
      const response= await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
     
      // const {id,status,name,species,origin,image,gender}=response.data;
   
      return res.status(200).json(response.data)
      
     }
   catch(error){ res.json(error.message)}



};
module.exports={
   getCharById,
};








