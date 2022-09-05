// const Sequelize = require('sequelize');
const { DataTypes }  = require('sequelize');
const sequelize = require('../database/conexion');

const Departamentos = sequelize.define('departamentos', {
    codigo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    nombre: {
        type: DataTypes.STRING
    },
    presupuesto: {
        type: DataTypes.BOOLEAN,
        dafaultValue: false
    }
}, {
    timestamps: false
});



module.exports = Departamentos;


