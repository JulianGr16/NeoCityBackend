import express from 'express'

//-1 configurar un puerto
const app = express()

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.info('Estoy escuchando el puerto '+app.get('port'))
})

//-2 configurar middelwares

//-3 configurar las rutas
// http://localhost:4000/prueba
app.get('/prueba', (req, res, next)=>{
    console.log('alguien hizo una solicitud get a la ruta de prueba')
    res.send('hola mundo desde el backend')
})