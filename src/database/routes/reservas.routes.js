import { Router } from "express";
import { 
  crearReserva, 
  listarReservas, 
  obtenerReserva, 
  editarReserva, 
  eliminarReserva 
} from "../../controllers/reservas.controllers.js";

const router = Router();

router.route('/')
  .post(crearReserva)
  .get(listarReservas);

router.route('/:id')
  .get(obtenerReserva)
  .put(editarReserva)
  .delete(eliminarReserva);

export default router;
