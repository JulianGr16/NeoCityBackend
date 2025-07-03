import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  esAdmin: {
    type: Boolean,
    default: false,
  },
  cuentaSuspendida: {
    type: Boolean,
    default: false,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  }
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;