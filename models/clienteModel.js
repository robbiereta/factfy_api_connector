const mongoose = require('mongoose')

const ClienteSchema = mongoose.Schema(
  {
    razonsocial: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    rfc: {
      type: String,
      required: [true, 'Please add a text value'],
    },

  
    regimen: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    email: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    calle: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    colonia: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    numext: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    numint: {
      type: String,
      required: [false, ''],
    },
  
  
    municipio: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
  
    estado: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  
    empresa: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  
    {
      timestamps: true,
    }
  

)

module.exports = mongoose.model('Cliente', ClienteSchema)
