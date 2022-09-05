const router = require('express').Router();
const empleadoController = require('../controllers/empleado.controller');

router.get('/',empleadoController.getAllEmpleados);
router.post('/',empleadoController.createEmpleado);
router.delete('/:codigoEmpleado',empleadoController.deleteEmpleado);
router.put('/:codigoEmpleado',empleadoController.updateEmpleado);

module.exports = router;
