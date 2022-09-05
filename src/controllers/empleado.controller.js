const service = require('../services/empleado.service');

async function getAllEmpleados(req, res) {

    try {
        const result = await service.getAllEmpleados();
        return res.status(result.statusCode).json(result.data);

    } catch (err) {
        console.log(`Error al obtener los empleado${err}`);
        return res.status(400).json({ mensaje: `Error al obtner los empleados ${err}` });
    }

}

async function createEmpleado(req, res) {

    try {
        const result = await service.createEmpleado(req.body);
        return res.status(result.statusCode).json({ mensaje: result.message });

    } catch (err) {
        console.log(`Error al crear el empleado${err}`);
        return res.status(400).json({ mensaje: `Error al crear el empleado ${err}` });
    }
}

async function deleteEmpleado(req, res) {

    try {
        const { codigoEmpleado } = req.params;
        const result = await service.deleteEmpleado(codigoEmpleado, req.body);

        return res.status(result.statusCode).json({ mensaje: result.message });

    } catch (err) {
        console.log(`Error al eliminar el empledo ${err}`);
        return res.status(400).json({ mensaje: `Error al eliminar el empledo ${err}` });
    }
}

async function updateEmpleado(req, res) {
    try {
        const { codigoEmpleado } = req.params;
        const result = await service.updateEmpleado(codigoEmpleado, req.body);
        return res.status(result.statusCode).json({ mensaje: result.message });

    } catch (err) {
        console.log(`Error al editar el empledo ${err}`);
        return res.status(400).json({ mensaje: `Error al editar el empledo ${err}` });
    }
}


module.exports = { createEmpleado, getAllEmpleados, deleteEmpleado, updateEmpleado };
