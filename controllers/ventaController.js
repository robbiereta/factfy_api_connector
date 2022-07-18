const asyncHandler = require('express-async-handler')

const ventaModel = require('../models/ventaModel')
const User = require('../models/userModel')
// @desc    Get Ventas
// @route   GET /api/Ventas
// @access  Private
const getVentas = asyncHandler(async (req, res) => {
  const ventas = await ventaModel.find()

  res.status(200).json(ventas)
})

// @desc    Get Venta
// @route   GET /api/Ventas/:id
// @access  Private
const getVenta = asyncHandler(async (req, res) => {
  const venta = await  ventaModel.findById(req.params.id)

  if (!venta) {
    res.status(400)
    throw new Error('Venta not found')
  }
       
  res.status(200).json(venta)
})

// @desc    Set Venta
// @route   POST /api/Ventas
// @access  Private
const setVenta = asyncHandler(async (req, res) => {
  
  const venta = await  ventaModel.create({
    total: req.body.total,
    movimientos: req.body.movimientos,
    usuario: req.body.usuario,
  empresa: req.body.empresa,
  })
venta.save()
  res.status(200).json(venta)
})

// @desc    Update Venta
// @route   PUT /api/Ventas/:id
// @access  Private
const updateVenta = asyncHandler(async (req, res) => {
  const venta = await  ventaModel.findById(req.params.id)

  if (!venta) {
    res.status(400)
    throw new Error('Venta not found')
  }
  const user = await User.findById(req.user.id)

  // Check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  const updatedVenta = await  ventaModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedVenta)
})

// @desc    Delete Venta
// @route   DELETE /api/Ventas/:id
// @access  Private
const deleteVenta = asyncHandler(async (req, res) => {
  const Venta = await  ventaModel.findById(req.params.id)

  if (!Venta) {
    res.status(400)
    throw new Error('Venta not found')
  }
  const user = await User.findById(req.user.id)

  // Check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  await  ventaModel.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getVentas,
  getVenta,
  setVenta,
  updateVenta,
  deleteVenta,
}
