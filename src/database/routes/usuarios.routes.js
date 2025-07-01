import { Router } from "express";
import { registrarUsuario, loginUsuario, obtenerUsuario } from "../../controllers/usuarios.controllers.js";

const router = Router();

router.post("/", registrarUsuario); // POST /api/usuarios/
router.post("/login", loginUsuario); // POST /api/usuarios/login
router.get("/:id", obtenerUsuario); // GET /api/usuarios/:id - NUEVA RUTA

export default router;