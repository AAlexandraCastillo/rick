
const {getCharById}=require('../controllers/getCharById')
const {login}=require('../controllers/login')
const {deleteFav, postFav}=require('../controllers/handleFavorites')
const mainRouter=require('express').Router();




mainRouter.get("/character/:id",getCharById)
mainRouter.get("/login",login)
mainRouter.post("/fav",postFav)
mainRouter.delete("/fav/:id",deleteFav)


module.exports=mainRouter;