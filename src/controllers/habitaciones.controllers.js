export const funcionPrueba = (req, res ) => {
    console.log('alguien hizo una solicitud get a la ruta de prueba')
    res.send('hola mundo desde el backend')
}

export const crearHabitacion = (req, res) =>{
    try {
        //extraer la habitacion del body(p request)
        console.log(req.body)
        //validar los datos del body
        //crear un objeto con el modelo de habitacion
        //guardar el objeto en la DB
        //enviar una respuesta de cofirmacion al crear la habitacion
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:'ocurrio un error, no te pude crear el producto'})
    }
}