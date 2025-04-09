import mongoose, {Schema} from "mongoose";

const habitacionSchema = new Schema({
    numero:{
        type: Number,
        required: true,
        min: 1,
        max: 1000,
        unique: true
    },
    tipo:{
        type: String,
        required: true,
        enum: ["Suite Standard", "Suite Junior", "Suite Premium"],
    },
    capacidad:{
        type: Number,
        required : true,
        min: 1,
        max: 4
    },
    precioPorNoche:{
        type: Number,
        required: true,
        min: 5000,
        max: 40000
    },
    fecha:{
        type: String,
        requed:true
    },
    imagen:{
        type: String,
        required: true
    },
})