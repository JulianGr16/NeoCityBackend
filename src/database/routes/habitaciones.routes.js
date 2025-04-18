import { Router } from "express";
import { crearHabitacion, funcionPrueba } from "../../controllers/habitaciones.controllers.js";


const router = Router();
router.route('/prueba').get(funcionPrueba)
router.route('/habitaciones').post(crearHabitacion)

export default router