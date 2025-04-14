import mongoose from "mongoose";

const mongoDB = process.env.MONGO_ACCESS;

mongoose.connect(mongoDB);

const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.info('DB conectada')
})