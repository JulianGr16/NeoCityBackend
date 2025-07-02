import { Router } from "express";
import { 
  registrarUsuario, 
  loginUsuario, 
  obtenerUsuario, 
  listarUsuarios, 
  editarUsuario, 
  cambiarEstadoCuenta, 
  eliminarUsuario 
} from "../../controllers/usuarios.controllers.js";

const router = Router();

router.post("/", registrarUsuario); // POST /api/usuarios/
router.post("/login", loginUsuario); // POST /api/usuarios/login
router.get("/", listarUsuarios); // GET /api/usuarios/ - Listar todos los usuarios
router.get("/:id", obtenerUsuario); // GET /api/usuarios/:id - Obtener usuario específico
router.put("/:id", editarUsuario); // PUT /api/usuarios/:id - Editar usuario
router.patch("/:id/estado", cambiarEstadoCuenta); // PATCH /api/usuarios/:id/estado - Suspender/Activar
router.delete("/:id", eliminarUsuario); // DELETE /api/usuarios/:id - Eliminar usuario

export default router;