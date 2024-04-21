const express =  require("express");
const UserRouter =  express.Router();
const CreateUser =  require("../controller/UserController")


UserRouter.post("/CreateUser" ,CreateUser );







module.exports = UserRouter;