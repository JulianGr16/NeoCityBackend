import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/dbConnection.js"
import habitacionesRoutes from "./src/database/routes/habitaciones.routes.js";
import usuariosRoutes from "./src/database/routes/usuarios.routes.js";
import reservasRoutes from "./src/database/routes/reservas.routes.js";
dotenv.config();
const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://localhost:3000',
    'https://neo-city-backend.vercel.app/', 
    'https://neocityhotel.netlify.app/',
    /\.vercel\.app$/,
    /\.netlify\.app$/
  ],
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/api/habitaciones", habitacionesRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/reservas", reservasRoutes);


app.use('*', (req, res) => {
  res.status(404).json({ mensaje: 'Endpoint no encontrado' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.info(`🚀 Servidor corriendo en puerto ${PORT}`);
});
