export const funcionPrueba = (req, res ) => {
    console.log('alguien hizo una solicitud get a la ruta de prueba')
    res.send('hola mundo desde el backend')
}