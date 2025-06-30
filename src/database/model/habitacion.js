// En tu archivo habitacion.js del backend
import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  tipo: {
    type: String,
    required: [true, "el tipo de habitacion es un dato obligatorio"],
    enum: ["Suite", "Suite Standard", "Suite Junior", "Suite Premium"],
  },
  capacidad: {
    type: Number,
    required: [true, "la capacidad de persona es un dato obligatorio"],
    min: 1,
    max: 4,
  },
  precioPorNoche: {
    type: Number,
    required: [true, "el precio por noche es un dato obligatorio"],
    min: [5000, "el precio minimo es $5.000"],
    max: [30000, "el precio maximo es $30.000"],
  },
  fecha: {
    type: String,
    required: [true, "la fecha disponible es un dato obligatorio"],
  },
  imagen: {
    type: String,
    required: [true, "la imagen es obligatoria"],
    validate: {
      validator: (valor) => {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
      },
    },
  },
  reserva: {
    type: Boolean,
    required: [true, "el estado de la habitación es obligatorio"], // Hacer obligatorio
    default: false,
  },
});

const Habitacion = mongoose.model("habitacion", habitacionSchema);
export default Habitacion;