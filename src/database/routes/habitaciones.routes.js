import { Router } from "express";
import { crearHabitacion, editarHabitaciones, funcionPrueba, listarHabitaciones, eliminarHabitaciones, obtenerHabitacion} from "../../controllers/habitaciones.controllers.js";


const router = Router();
router.route('/prueba').get(funcionPrueba)
router.route('/habitaciones').post(crearHabitacion).get(listarHabitaciones)
router.route('/habitaciones/:id').put(editarHabitaciones).delete(eliminarHabitaciones).get(obtenerHabitacion)

export default router