import Habitacion from "../database/model/habitacion.js";

export const crearHabitacion = async (req, res) => {
  try {
    const habitacionNuevo = new Habitacion(req.body);
    await habitacionNuevo.save();
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
    const habitaciones = await Habitacion.find();
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
    const habitacionBuscada = await Habitacion.findById(req.params.id);
    if(!habitacionBuscada){
      return res.status(404).json({mensaje: "no se encontro la habitacion"})
    }
    await Habitacion.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({mensaje: "la habitacion fue editada con exito"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error, no se pudo editar la habitacion" });
  }
};

export const eliminarHabitaciones = async (req, res) => {
  try{
    const habitacionBuscada = await Habitacion.findById(req.params.id);
    if(!habitacionBuscada){
      return res.status(404).json({mensaje: "no se encontro la habitacion"})
    }
    await Habitacion.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje: "la habitacion fue eliminada con exito"})

  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error, no se pudo eliminar la habitacion" });
  }
};

export const obtenerHabitacion = async (req, res) => {
  try{
    const habitacionBuscada = await Habitacion.findById(req.params.id);
    if(!habitacionBuscada){
      return res.status(404).json({mensaje: "no se encontro la habitacion"})
    }
    const habitacionTransformada = {
      ...habitacionBuscada.toObject(),
      id: habitacionBuscada._id
    };
    res.status(200).json(habitacionTransformada)

  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error, no se pudo obtener la habitacion" });
  }
}