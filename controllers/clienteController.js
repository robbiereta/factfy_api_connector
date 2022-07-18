const asyncHandler = require('express-async-handler')

const clienteModel = require('../models/clienteModel')
const User = require('../models/userModel')
// @desc    Get clientes
// @route   GET /api/clientes
// @access  Private
const getClientes = asyncHandler(async (req, res) => {
  const clientes = await clienteModel.find({ })

  res.status(200).json(clientes)
})

// @desc    Get cliente
// @route   GET /api/clientes/:id
// @access  Private
const getCliente = asyncHandler(async (req, res) => {
  const cliente = await  clienteModel.findById(req.params.id)

  if (!cliente) {
    res.status(400)
    throw new Error('cliente not found')
  }

  res.status(200).json(cliente)
})

// @desc    Set cliente
// @route   POST /api/clientes
// @access  Private
const setCliente = asyncHandler(async (req, res) => {
 

  const cliente = await  clienteModel.create({
    razonsocial: req.body.razonsocial,
    rfc: req.body.rfc,
    regimen: req.body.regimen,
    email: req.body.email,
    calle: req.body.calle,
colonia:req.body.colonia,
numext: req.body.numext,
numint: req.body.numint,
municipio: req.body.municipio,
estado: req.body.estado,
empresa: req.body.empresa,
    
  })

  res.status(200).json(cliente)
})

// @desc    Update cliente
// @route   PUT /api/clientes/:id
// @access  Private
const updateCliente = asyncHandler(async (req, res) => {
  const cliente = await  clienteModel.findById(req.params.id)

  if (!cliente) {
    res.status(400)
    throw new Error('cliente not found')
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
  const updatedcliente = await  clienteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedcliente)
})

// @desc    Delete cliente
// @route   DELETE /api/clientes/:id
// @access  Private
const deleteCliente = asyncHandler(async (req, res) => {
  const cliente = await  clienteModel.findById(req.params.id)

  if (!cliente) {
    res.status(400)
    throw new Error('cliente not found')
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
  await  clienteModel.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getClientes,
  getCliente,
  setCliente,
  updateCliente,
  deleteCliente,
}
