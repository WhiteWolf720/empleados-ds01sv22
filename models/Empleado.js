const mongoose = require('mongoose')
const Schema = mongoose.Schema

//esquema de empleado 
let Empleado = new Schema({
    nombre: {
        type: String
    },
    departamento: {
        type: String
    },
    correo: {
        type: String
    },
    telefono: {
        type: Number
    }
},{//nombre de la colección
    collection: 'empleados'
})

module.exports = mongoose.model('Empleado',Empleado)