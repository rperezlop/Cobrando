
const Empleado = require('../models/Empleados');


// Trae todos los empleados 
const getAllEmpleados = async () => {
    try {
        const empleados = await Empleado.findAll();
        return { statusCode: 200, data: empleados }
    } catch (err) {
        return err;
    }
}

// Crea el empleado
const createEmpleado = async (params) => {

    try {
        const { nif, nombre, apellido1, apellido2, codigo_departamento } = params;
        await Empleado.create({nif, nombre, apellido1, apellido2, codigo_departamento });
        return { statusCode: 200, message: 'Empleado creado con exito' }
    } catch (err) {
        return err;
    }
}

// Elimina el emplado
const deleteEmpleado = async (codigoEmpleado) => {

    try {
        await Empleado.destroy({
            where: {
                codigo: codigoEmpleado
            }
        })
        return { statusCode: 200, message: 'Empleado eliminado con exito' }

    } catch (err) {
        return err;
    }
}
// Actualiza el empleado 
const updateEmpleado = async (codigoEmpleado, data) => {
    try {
        const { nif, nombre, apellido1, apellido2, codigo_departamento } = data;
        const empleado = await Empleado.findOne({
            where: {
                codigo: codigoEmpleado
            }
        });
        empleado.update({
            nif, nombre, apellido1, apellido2, codigo_departamento
        });
        return { statusCode: 200, message: 'Empleado actualizado con exito' }

    } catch (err) {
        return err;
    }
}

module.exports = {
    deleteEmpleado,
    getAllEmpleados,
    createEmpleado,
    updateEmpleado
}