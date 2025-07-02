import Reserva from "../database/model/reserva.js";

export const crearReserva = async (req, res) => {
  try {
    const nuevaReserva = new Reserva(req.body);
    await nuevaReserva.save();
    res.status(201).json({ mensaje: "Reserva creada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la reserva" });
  }
};

export const listarReservas = async (req, res) => {
  try {
    const { usuarioId } = req.query;
    const filtro = usuarioId ? { usuarioId } : {};
    
    const reservas = await Reserva.find(filtro);
    // Transformar cada reserva para agregar el campo 'id'
    const reservasTransformadas = reservas.map(reserva => ({
      ...reserva.toObject(),
      id: reserva._id
    }));
    res.status(200).json(reservasTransformadas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener las reservas" });
  }
};

export const obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ mensaje: "Reserva no encontrada" });
    }
    // Transformar _id a id para compatibilidad con frontend
    const reservaTransformada = {
      ...reserva.toObject(),
      id: reserva._id
    };
    res.status(200).json(reservaTransformada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la reserva" });
  }
};

export const editarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ mensaje: "Reserva no encontrada" });
    }
    
    await Reserva.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Reserva editada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar la reserva" });
  }
};

export const eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ mensaje: "Reserva no encontrada" });
    }
    
    await Reserva.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Reserva eliminada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la reserva" });
  }
};
