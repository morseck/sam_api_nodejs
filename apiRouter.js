//Imports
var express = require('express')
var usersController = require('./controllers/userController')

//les constantes
const userRoutePrefix = '/users';
const groupeRoutePrefix = '/groupes';
const droitRoutePrefix = '/droits';
//Router
exports.router = (()=>{
    var apiRouter = express.Router();

    //Users routes
    apiRouter.route(userRoutePrefix+'/register/').post(usersController.register); //route pour enregistrer un User
    apiRouter.route(userRoutePrefix+'/login/').post(usersController.login); //route pour s'authentifier
    apiRouter.route(userRoutePrefix+'/profile/').get(usersController.getUserProfile); //route pour recuperer le profile d'un user à travers l'entete d'authorization
    apiRouter.route(userRoutePrefix+'/update/').put(usersController.updateUserProfile); //route pour faire une update d'un user


    return apiRouter;
})();