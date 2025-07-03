import { Router } from "express";
import { crearHabitacion, editarHabitaciones, listarHabitaciones, eliminarHabitaciones, obtenerHabitacion} from "../../controllers/habitaciones.controllers.js";


const router = Router();
router.route('/').post(crearHabitacion).get(listarHabitaciones)
router.route('/:id').put(editarHabitaciones).delete(eliminarHabitaciones).get(obtenerHabitacion)

export default router