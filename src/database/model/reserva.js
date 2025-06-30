import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  habitacionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'habitacion',
    required: true,
  },
  fechaReserva: {
    type: String,
    required: true,
  },
  fechaCheckIn: {
    type: String,
    required: true,
  },
  fechaCheckOut: {
    type: String,
    required: true,
  },
  cantidadPersonas: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
  },
  cantidadNoches: {
    type: Number,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada'],
    default: 'confirmada',
  },
});

const Reserva = mongoose.model("reserva", reservaSchema);
export default Reserva;
