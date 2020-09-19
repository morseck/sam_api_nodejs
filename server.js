//Import
var express =  require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var apiRouter = require('./apiRouter').router;


//Les constantes
const app = express();
var PORT = 8080;

//les midlewares
app.use(bodyParser.json())
app.use(cors())

//Routes de tous les api
app.use('/api/', apiRouter)

app.get('/', (req, resp)=>{
    resp.status(200).send("Je suis le serveur.")
});

app.listen(PORT, ()=>{
    console.log("Serveur démaré au port:", PORT)
})