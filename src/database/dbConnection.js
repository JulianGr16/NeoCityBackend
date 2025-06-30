import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB = process.env.MONGO_ACCESS;

mongoose.connect(mongoDB);

const conexion = mongoose.connection;

conexion.once('open', () => {
  console.info('DB conectada');
});
