var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var models = require('../models')
//Routes
module.exports= {

    /**
     * List of all carteAccess
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    indexCarteAcces: (req, resp)=>{

    },

    /**
     * crrate a CarteAcces
     * @param req is the request
     * @param resp is the response
     * @returns {*|Json|Promise<any>}
     */
    createCarteAccess: (req, resp)=>{

        //Recuperations des parametres
        var numeroCarte = req.body.numero_carte;
        var idUser = req.body.idUser;
        var idGroupe = req.body.idGroupe;
        var disponible_carteAcces= true

        if (numeroCarte == null || idUser == null || idGroupe == null)
            return resp.status(500).json({'error': 'Veuillez renseigner les champs obligatoires'})

        //Verifier la taille du pseudo, le mails par regex , le password etc

    },
    /**
     * Show a carteAcces by idCarteAcces
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    showCarte: (req, resp)=>{

    },
    /**
     * Update a carte access
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    updateCarteAcces: (req, resp)=>{

    },

    /**
     * Delete a carte accees by idCarte
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    deleteCarteAcces: (req, resp)=>{

    }
}