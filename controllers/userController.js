var bcrypt = require('bcrypt')
var models = require('../models')
var jwtUtils = require('../utils/jwt.utils');
var asyncLib = require('async')

//CONSTANTES
EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
PASSWORD_REGEX = /^(?=.*\d).{6,12}$/; //Password compris entre 8 et 12 caractere et qui comprend aumoins un chifre


//DEFIFNITION DES FONCTIONS HELPER

/**
 * fonction qui retourne le IdUSER en passant les headers authorization parser du token
 * @param req
 * @returns {*|number}
 */
 function getIdUserByHeaderAuthToken(req){
    return jwtUtils.getIdUser(req.headers['authorization']);
}

//fonction asynchrone pour trouver l'existence d'un User
async function foundUser(email){
    let user;
    await models.User.findOne({
        attributes: ['email'],
        where: {email: email}
        })
        .then((userFound)=>{
            if (!userFound){
           user = JSON.parse(JSON.stringify({
               'status': 200,
               'body': userFound
           }))
        } else user = JSON.parse(JSON.stringify({
                'status': 409,
                'body': 'Cet utilisateur existe déjà'
            }))
            //resp.status(409).json({'error': 'Cet utilisateur existe déjà'})
        })
        .catch(err=> user = JSON.parse(JSON.stringify({
            'status': 500,
            'body': err
            })
        ))
    return user;
}

//fonction asynchrone pour creer un User
async function createUser(req, bcryptedPassword){
    let user;
    await models.User.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: bcryptedPassword,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        cni: req.body.cni,
        disponible_user: 1
    })
    .then(newUser=>user = JSON.parse(JSON.stringify({'status': 200, 'body': newUser})))
    .catch(err=> user = JSON.parse(JSON.stringify({'status': 500, 'body': err})))

    console.log("newUser", user)
    return user

}

module.exports= {
    /**
     * Methode qui permet de s'enregistrer dans le systeme
     * @param req
     * @param resp
     * @returns {Promise<*|Json|Promise<any>>}
     */
    register: async (req, resp)=>{
        //Recuperations des parametres
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var password = req.body.password;
        var email =  req.body.email;


        //Verification des parametres obligatoire
        if (nom == null || prenom == null || password == null || email == null)
            return resp.status(400).json({'error': 'Veuillez renseigner les champs obligatoires'})

        if (!EMAIL_REGEX.test(email))
            return resp.status(400).json({'error': 'Adresse email invalide'})

        if (!PASSWORD_REGEX.test(password))
            return resp.status(400).json({'error': 'Le mot doit avoir 6 à 12 caractères et contenir au moins un chiffre'})


        let user = await foundUser(email); //Verifier l'existence du User a travers le email
        if (user.status === 200){
            bcrypt.hash(password, 5, async (err, bcryptedPassword)=>{
                let newUser = await createUser(req, bcryptedPassword);//Creer un nouvel user en cryptant son password
                if (newUser.status === 200)return resp.status(newUser.status).send(newUser.body)
                else return resp.status(newUser.status).json({'error': newUser.body})
            })
        }else return resp.status(user.status).json({'error': user.body})


    },


    /**
     * Methode qui permet de se connecter au systeme
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    login: (req, resp)=>{
        //Les parametres
        var email = req.body.email;
        var password = req.body.password

        if (email == null || password == null)
            return resp.status(400).json({'error': 'Veuillez renseigner les champs obligatoires'})

        //Verification si le user exist
        models.User.findOne({
            where: {email: email}
        })
        .then((userFound)=>{
            if (userFound){
                bcrypt.compare(password, userFound.password, (errBcrypt, respBcrypt)=>{
                   return respBcrypt ?
                       resp.status(200).json({
                        "idUser": userFound.id,
                        'token': jwtUtils.generateTokenForUser(userFound)
                        }):
                       resp.status(403).json({"error": "Mot de passe invalide"})
                })
            }else return resp.status(403).json({"error": "Cet utilisateur n'existe pas"})
        })
        .catch(err=>resp.status(500).json({'errorCatch': err}))
    },

    /**
     * Methode pour retourner le profile d'un User en connaisant son id
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    getUserProfile: (req, resp)=>{
        //recuperation autorisation auniveau des en-tete
        var idUser = getIdUserByHeaderAuthToken(req)

        if (idUser < 0) return resp.status(400).json({'error': 'Token invalide'})

        models.User.findOne({
            attributes: ['id', 'email', 'nom', 'prenom', 'email', 'telephone', 'adresse', 'cni'],
            where: {id: idUser}
        })
        .then((user)=> user ?  resp.status(201).send(user) : resp.status(404).json({'error': 'Utilisateur non trouvé'}))
        .catch(err=>resp.status(500).json({'error': err}))
    },

    /**
     * Methode qui permet de faire une mise à jour d'un user par le bias de son IdUSER en passant par les waterfall
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    updateUserProfile: (req, resp)=>{
        //recuperer le idUser en passant le header authorization parser du token
        var idUser = getIdUserByHeaderAuthToken(req);
        if (idUser < 0) return resp.status(400).json({'error': 'Token invalide'})

        //Verification des parametres obligatoire

        if (req.body.email != null)
            if (!EMAIL_REGEX.test(req.body.email))
                return resp.status(400).json({'error': 'Adresse email invalide'})


        asyncLib.waterfall([
            //premier fonction waterfall: elle permet de recuper le user grace à son id
            function (updateUser) {
                models.User.findOne({
                    attributes: ['id', 'nom', 'prenom', 'email', 'telephone', 'adresse', 'cni', 'disponible_user'],
                    where: {id: idUser}
                })
                .then(userFound=>updateUser(null, userFound))
                .catch(err=>resp.stat(500).json({'error1': err}))
            },
            //deuxieme fonction waterfall: elle permet de faire la mise en jour du profile user
            function (userFound, updateFinish) {
                if (userFound){
                    console.log("userFound", userFound)
                    userFound.update({
                        //les attributs à modifier
                        email: (req.body.email ? req.body.email : userFound.email),
                        nom: (req.body.nom ? req.body.nom : userFound.nom),
                        prenom: (req.body.prenom ? req.body.prenom : userFound.prenom),
                        telephone: (req.body.telephone ? req.body.telephone : userFound.telephone),
                        adresse: (req.body.adresse ? req.body.adresse : userFound.adresse),
                        cni: (req.body.cni ? req.body.cni : userFound.cni)
                    })
                    .then(_=>updateFinish(userFound))
                    .catch(err=>resp.status(500).json({'error2': err}))
                }else resp.status(404).json({'error': 'Cet utilisateur n\'a pas été trouvé '})
            },
        ],
        //Troisieme et derniere fonction waterfal: elle permet de verifier la validater de userFound et de renvois le resultat
        function (userFound) {
            return userFound ? resp.status(200).send(userFound): resp.status('500').json({'error': 'La mise à jour a échoué'})
        })
    }
}