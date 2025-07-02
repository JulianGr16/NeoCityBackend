import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import "./src/database/dbConnection.js"
import habitacionesRoutes from "./src/database/routes/habitaciones.routes.js";
import usuariosRoutes from "./src/database/routes/usuarios.routes.js";
import reservasRoutes from "./src/database/routes/reservas.routes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static('public'));

app.use("/api/habitaciones", habitacionesRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/reservas", reservasRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.info(`🚀 Servidor corriendo en puerto ${PORT}`);
});
