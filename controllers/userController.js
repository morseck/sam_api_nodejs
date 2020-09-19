var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var models = require('../models')
//Routes
module.exports= {
    register: (req, resp)=>{

        //Recuperations des parametres
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var password = req.body.password;
        var email =  req.body.email;
        var telephone = req.body.telephone;
        var adresse = req.body.adresse;
        var cin = req.body.cni;
        var disponible = req.body.disponible

        if (nom == null || prenom == null || password == null || email == null)
            return resp.status(400).json({'error': 'Veuillez renseigner les champs obligatoires'})

        //Verifier la taille du pseudo, le mails par regex , le password etc

    },
    login: (req, resp)=>{

    }
}