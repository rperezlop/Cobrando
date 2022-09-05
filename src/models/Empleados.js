// const Sequelize = require('sequelize');
const { DataTypes }  = require('sequelize');
const sequelize = require('../database/conexion');

const Empleados = sequelize.define('empleados', {
    codigo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nif: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido1: {
        type: DataTypes.STRING
    },
    apellido2: {
        type: DataTypes.STRING
    },
    codigo_departamento : {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Empleados;





