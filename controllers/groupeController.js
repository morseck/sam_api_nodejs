var models = require('../models')
//Routes
module.exports= {

    /**
     * List of all Groupe
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    indexGroupe: (req, resp)=>{

    },

    /**
     * crrate a Groupe
     * @param req is the request
     * @param resp is the response
     * @returns {*|Json|Promise<any>}
     */
    createGroupe: (req, resp)=>{

        //Recuperations des parametres
        var nomGroupe = req.body.nom_groupe;

        if (nomGroupe == null)
            return resp.status(500).json({'error': 'Veuillez renseigner les champs obligatoires'})

    },
    /**
     * Show a Groupe by idGroupe
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    showGroupe: (req, resp)=>{

    },
    /**
     * Update a Groupe
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    updateGroupe: (req, resp)=>{

    },

    /**
     * Delete a Groupe by idGroupe
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    deleteGroupe: (req, resp)=>{

    }
}