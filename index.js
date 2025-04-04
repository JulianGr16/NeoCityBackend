import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

//-1 configurar un puerto
const app = express()

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.info('Estoy escuchando el puerto '+app.get('port'))
})

//-2 configurar middelwares
app.use(cors()) // habilita conexiones remotas
app.use(morgan('dev')) // nos da informacion extra en la terminal
app.use(express.json()) // interpretar los datos en formato json de la solicitud
app.use(express.urlencoded({extended: true}))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '/public')))

//-3 configurar las rutas
// http://localhost:4000/prueba
app.get('/prueba', (req, res, next)=>{
    console.log('alguien hizo una solicitud get a la ruta de prueba')
    res.send('hola mundo desde el backend')
})