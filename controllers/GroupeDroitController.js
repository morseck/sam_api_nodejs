var models = require('../models')
//Routes
module.exports= {

    /**
     * List of all GroupeDroit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    indexGroupeDroit: (req, resp)=>{

    },

    /**
     * crrate a GroupeDroit
     * @param req is the request
     * @param resp is the response
     * @returns {*|Json|Promise<any>}
     */
    createGroupeDroit: (req, resp)=>{

        //Recuperations des parametres
        var idDroit = req.body.iddroit;
        var idGroupe = req.body.idgroupe;

        if (idGroupe == null || idDroit == null)
            return resp.status(500).json({'error': 'Veuillez renseigner les champs obligatoires'})

    },
    /**
     * Show a GroupeDroit by idGroupeDroit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    showGroupeDroit: (req, resp)=>{

    },
    /**
     * Update a GroupeDroit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    updateGroupeDroit: (req, resp)=>{

    },

    /**
     * Delete a GroupeDroit by idGroupeDroit
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    deleteGroupeDroit: (req, resp)=>{

    }
}