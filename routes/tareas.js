let express = require('express');
let tareasController = require('../controllers/tareasController.js')

let router = express.Router();

router.get('/',tareasController.getTareas)
router.post('/', tareasController.addTarea)
router.delete('/:id',tareasController.eliminarTarea)

module.exports = router;