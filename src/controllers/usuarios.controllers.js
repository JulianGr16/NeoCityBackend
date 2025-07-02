import Usuario from "../database/model/usuario.js";

const correoElectronicoAdmin = [
  "admin12@gmail.com",
  "admin@neocity.com",
  "admin20@neocity.com",
];

// Crear usuario (registro)
export const registrarUsuario = async (req, res) => {
  try {
    const { nombreUsuario, email, password } = req.body;

    // Verificar si ya existe
    const existeUsuario = await Usuario.findOne({ email });
    if (existeUsuario) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    // Determinar si es administrador basado en el email
    const esAdmin = correoElectronicoAdmin.includes(email);

    const nuevoUsuario = new Usuario({
      nombreUsuario,
      email,
      password,
      esAdmin,
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "Usuario creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar usuario" });
  }
};

// Login (verificación)
export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    // Verificar si la cuenta está suspendida
    if (usuario.cuentaSuspendida) {
      return res.status(403).json({ mensaje: "Tu cuenta ha sido suspendida. Contacta al administrador." });
    }

    res.status(200).json({
      mensaje: "Login exitoso",
      usuario: {
        id: usuario._id,
        nombreUsuario: usuario.nombreUsuario,
        email: usuario.email,
        esAdmin: usuario.esAdmin,
        cuentaSuspendida: usuario.cuentaSuspendida,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al iniciar sesión" });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    
    // Transformar _id a id para compatibilidad con frontend
    const usuarioTransformado = {
      ...usuario.toObject(),
      id: usuario._id,
    };
    
    res.status(200).json(usuarioTransformado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el usuario" });
  }
};

// Listar todos los usuarios (solo para administradores)
export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select('-password'); // Excluir passwords
    const usuariosTransformados = usuarios.map((usuario) => ({
      ...usuario.toObject(),
      id: usuario._id,
    }));
    res.status(200).json(usuariosTransformados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la lista de usuarios" });
  }
};

// Editar usuario
export const editarUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // No permitir cambiar el campo esAdmin a través de esta ruta
    const { esAdmin, ...datosActualizados } = req.body;

    await Usuario.findByIdAndUpdate(req.params.id, datosActualizados);
    res.status(200).json({ mensaje: "Usuario editado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar el usuario" });
  }
};

// Suspender/Activar cuenta de usuario
export const cambiarEstadoCuenta = async (req, res) => {
  try {
    const { cuentaSuspendida } = req.body;
    const usuarioBuscado = await Usuario.findById(req.params.id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // No permitir suspender cuentas de administrador
    if (usuarioBuscado.esAdmin) {
      return res.status(400).json({ mensaje: "No se puede suspender una cuenta de administrador" });
    }

    await Usuario.findByIdAndUpdate(req.params.id, { cuentaSuspendida });
    const accion = cuentaSuspendida ? "suspendida" : "activada";
    res.status(200).json({ mensaje: `Cuenta ${accion} con éxito` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al cambiar el estado de la cuenta" });
  }
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    
    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // No permitir eliminar cuentas de administrador
    if (usuarioBuscado.esAdmin) {
      return res.status(400).json({ mensaje: "No se puede eliminar una cuenta de administrador" });
    }

    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Usuario eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el usuario" });
  }
};