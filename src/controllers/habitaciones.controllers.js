import Habitacion from "../database/model/habitacion.js";

Habitacion;
export const funcionPrueba = (req, res) => {
  console.log("alguien hizo una solicitud get a la ruta de prueba");
  res.send("hola mundo desde el backend");
};

export const crearHabitacion = async (req, res) => {
  try {
    //extraer la habitacion del body(p request)
    //validar los datos del body
    //crear un objeto con el modelo de habitacion
    const habitacionNuevo = new Habitacion(req.body);
    //guardar el objeto en la DB
    await habitacionNuevo.save();
    //enviar una respuesta de cofirmacion al crear la habitacion
    res.status(201).json({ mensaje: "La habitacion fue creada con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no se pudo crear la habitacion" });
  }
};

export const listarHabitaciones = async (req, res) => {
  try {
    //pedir a la DB la coleccion de productos
    const habitaciones = await Habitacion.find();
    //enviar una respuesta de cofirmacion al crear la habitacion
    res.status(200).json(habitaciones);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no se pudo mostrar las habitaciones" });
  }
};

export const editarHabitaciones = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.params.id)
    //validar los datos del body
    //buscar si el produco existe
    const habitacionBuscada = await Habitacion.findById(req.params.id);
    console.log(habitacionBuscada)

    //en caso de que el producto no exista contesa con un error 404
    if(!habitacionBuscada){
      return res.status(404).json({mensaje: "no se encontro la habitacion"})
    }
    //si econtre el producto lo edito
    await Habitacion.findByIdAndUpdate(req.params.id, req.body)
    //envio respuesta al fontend
    res.status(200).json({mensaje: "la habitacion fue editada con exito"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error, no se pudo editar la habitacion" });
  }
};

export const eliminarHabitaciones = async (req, res) => {
  try{
    //verificar si el ID es valido
    const habitacionBuscada = await Habitacion.findById(req.params.id);
    //si el ID no existe envio un mensaje de error
    if(!habitacionBuscada){
      return res.status(404).json({mensaje: "no se encontro la habitacion"})
    }
    //si existe la habitacion con el ID lo borro y contesto al frontend
    await Habitacion.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje: "la habitacion fue eliminada con exito"})

  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error, no se pudo eliminar la habitacion" });
  }
};


export const obtenerHabitacion = async (req, res) => {
  try{
    //verificar si la habitacion existe
    const habitacionBuscada = await Habitacion.findById(req.params.id);
    //si no existe mensaje de error 404
    if(!habitacionBuscada){
      return res.status(404).json({mensaje: "no se encontro la habitacion"})
    }
    //si existe desvolver el producto
    res.status(200).json(habitacionBuscada)

  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error, no se pudo obtener la habitacion" });
  }
}