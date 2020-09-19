var models = require('../models')
//Routes
module.exports= {

    /**
     * List of all Droit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    indexDroit: (req, resp)=>{

    },

    /**
     * crrate a Droit
     * @param req is the request
     * @param resp is the response
     * @returns {*|Json|Promise<any>}
     */
    createDroit: (req, resp)=>{

        //Recuperations des parametres
        var nomDroit = req.body.nom_droit;

        if (nomDroit == null)
            return resp.status(500).json({'error': 'Veuillez renseigner les champs obligatoires'})

    },
    /**
     * Show a Droit by idDroit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    showDroit: (req, resp)=>{

    },
    /**
     * Update a Droit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    updateDroit: (req, resp)=>{

    },

    /**
     * Delete a Droit by idDroit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    deleteDroit: (req, resp)=>{

    }
}