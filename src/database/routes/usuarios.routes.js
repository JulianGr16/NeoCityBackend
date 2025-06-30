import { Router } from "express";
import { registrarUsuario, loginUsuario } from "../../controllers/usuarios.controllers.js";

const router = Router();

router.post("/", registrarUsuario); // POST /api/usuarios/
router.post("/login", loginUsuario); // POST /api/usuarios/login

export default router;
