//El post se usa para crear nuevos registros
//El put se usa para actualizar información(El path se maneja casi de la misma manera que el put)
//En la bases de datos ya no se acostumbra borrar registros, actualmente se cambia el estado de eso que se quiere borrar
//Hay que indicarle cual va a ser el parametro que se le va a enviar '/usuario/:id'
//En el post normalmente no solo se hace la peticion, sino que tambien se manda la informacion
//El paquete de npm body-parser nos permite obtener la informacion que enviamos en el post

require('./config/config') //Tiene que estar primero para que cundo se inicie la aplicacion va a leer este archivo y lo va a ejecutar
const express = require('express')
const app = express()
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
//son midleware, son funciones que se ejecutan cada vez que se hagan peticiones
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/usuario', function(req, res) {
    res.send('get Usuario')
})

app.post('/usuario', function(req, res) {
    let body = req.body
    if (!body.Nombre) {
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        })
    }
    res.json({ Persona: body })
})


app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    console.log(id)
    res.json({ id })
})

app.delete('/usuario', function(req, res) {
    res.send('delete Usuario')
})


app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT)
})