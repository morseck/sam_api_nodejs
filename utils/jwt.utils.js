//Import
var jwt = require('jsonwebtoken')
var JWT_SIGN_SECRET = "0ZKDKkjdkjkdjkjdkjkjdkkdj@1kdkdlklkf338DJjdjd"; //Cles secret pour signer le token
//Exported functions

module.exports = {
    /**
     * Methode pour generer un token à l'utilisateur nouvellement connecté
     * @param userData
     * @returns TokenSigned
     */
    generateTokenForUser: (userData)=>{
        return jwt.sign({
            idUser: userData.id,
            nom: userData.nom,
            prenom: userData.prenom,
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h',//Durée de vie du Token
        })
    },

    /**
     *Methode pour recuperer le token au niveau des entete d'authorisation
     * @param authorization
     * @returns {any}
     */
    parseAuthorization: (authorization)=>(authorization != null) ? authorization.replace('Bearer ', ''): null,

    /**
     * Methode pour recuperer le idUser en passant par la methode parseAuthorization afin de nous assurer de l'authenticité des données
     * @param authorization
     * @returns {number}
     */
    getIdUser: (authorization)=>{
        var idUser = -1;
        var token = module.exports.parseAuthorization(authorization)
        if (token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (jwtToken!= null)
                    idUser = jwtToken.idUser
            }catch (err) {}
        }
        return idUser
    }

}