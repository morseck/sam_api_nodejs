//Imports
var express = require('express')
var usersController = require('./controllers/userController')

//les constantes
const userRoutePrefix = '/user';
const groupeRoutePrefix = '/groupe';
const droitRoutePrefix = '/droit';
//Router
exports.router = (()=>{
    var apiRouter = express.Router();

    //Users routes
    apiRouter.route(userRoutePrefix+'/register/').post(usersController.register)
    apiRouter.route(userRoutePrefix+'/login/').post(usersController.login)

    return apiRouter;
})();