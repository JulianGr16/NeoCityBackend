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
      .json({ mensaje: "ocurrio un error, no te pude crear la habitacion" });
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
      .json({ mensaje: "ocurrio un error, no te pude crear la habitacion" });
  }
};

export const editarHabitaciones = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude editar la habitacion" });
  }
};
