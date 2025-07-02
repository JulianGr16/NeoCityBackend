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

router.post("/", registrarUsuario);
router.post("/login", loginUsuario);
router.get("/", listarUsuarios);
router.get("/:id", obtenerUsuario);
router.put("/:id", editarUsuario);
router.patch("/:id/estado", cambiarEstadoCuenta);
router.delete("/:id", eliminarUsuario);

export default router;