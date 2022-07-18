const express = require('express')
const router = express.Router()
const {
  getClientes,
  getCliente,
  setCliente,
  updateCliente,
  deleteCliente,
} = require('../controllers/clienteController')
const { protect } = require('../middleware/authMiddleware')
router.route('/').get(protect,getClientes).post(setCliente)
router.route('/:id').get(protect,getCliente)
router.route('/:id').delete(protect,deleteCliente).put(protect,updateCliente)

module.exports = router