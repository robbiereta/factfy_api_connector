const mongoose = require('mongoose')

const VentaSchema = mongoose.Schema(
  {
   total: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
  
  
    movimientos: [{
     "producto": 'string' ,
     "cantidad": Number ,
     "importe": Number ,
     "claveprodserv":Number,
     "precio_untario":Number,
     "unidad_medida":'string'

    }],
    usuario:{
      type: String,
      required: [true, 'Please add a text value']
    },
    empresa:{
      type: String,
      required: [true, 'Please add a text value']
    },
    
  },
  
    {
      timestamps: true,
    }
  

)

module.exports = mongoose.model('Venta', VentaSchema)
