import Usuario from "../database/model/usuario.js";

const adminEmails = [
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
    const esAdmin = adminEmails.includes(email);

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

    res.status(200).json({
      mensaje: "Login exitoso",
      usuario: {
        id: usuario._id,
        nombreUsuario: usuario.nombreUsuario,
        email: usuario.email,
        esAdmin: usuario.esAdmin,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al iniciar sesión" });
  }
};
