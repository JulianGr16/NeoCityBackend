import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  tipo: {
    type: String,
    required: [true, "el tipo de habitacion es un dato obligatorio"],
    enum: ["Suite Standard", "Suite Junior", "Suite Premium"],
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
    required: [true, "la fehca disponible es un dato obligatorio"],
    match: [
      /^\d{1,2}\/\d{1,2}\/\d{4} a \d{1,2}\/\d{1,2}\/\d{4}$/,
      'La fecha debe estar en el formato "dd/mm/yyyy a dd/mm/yyyy"',
    ],
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
    default: false,
  },
});

const Habitacion = mongoose.model("habitacion", habitacionSchema);

export default Habitacion;
