var models = require('../models')
//Routes
module.exports= {

    /**
     * List of all FeuillePointage
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    indexFeuillePointage: (req, resp)=>{

    },

    /**
     * crrate a FeuillePointage
     * @param req is the request
     * @param resp is the response
     * @returns {*|Json|Promise<any>}
     */
    createFeuillePointage: (req, resp)=>{

        //Recuperations des parametres
        var dateFeuillePointage = req.body.date_feuille_pointage;

        if (dateFeuillePointage == null)
            return resp.status(500).json({'error': 'Veuillez renseigner les champs obligatoires'})

    },
    /**
     * Show a FeuillePointage by idFeuillePointage
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    showFeuillePointage: (req, resp)=>{

    },
    /**
     * Update a FeuillePointage
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    updateFeuillePointage: (req, resp)=>{

    },

    /**
     * Delete a FeuillePointage by idFeuillePointage
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    deleteFeuillePointage: (req, resp)=>{

    }
}