const users=require('../utils/users');

const login=(req,res)=>{
   const{email,password}=req.query;
  
  const usuario=users.find((us)=>us.password===password && us.email===email)
  return usuario?res.status(200).json({access:true}):
  res.status(200).json({access:false})
  
}

module.exports={login};