var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  var axios = require("axios");
  var resp;
  var data = JSON.stringify({
    emisor: {
      uuid: "507d0fa0-9496-424d-9b43-a01a25843f98"
    },
    receptor: {
      uuid: "c9d2ba34-53f9-45cd-83ff-f29ebc3e39e2"
    },
    factura: {
      fecha: "2019-07-25 10:22:18",
      tipo: "ingreso",
      generacion_automatica: true,
      subtotal: 2001,
      impuesto_federal: 320,
      total: 2320,
      conceptos: [
        {
          clave_producto_servicio: "76111500",
          clave_unidad_de_medida: "E48",
          cantidad: 1,
          descripcion: "SERVICIO DE LIMPIEZA",
          valor_unitario: 2001,
          total: 2001
        }
      ]
    }
  });

  var config = {
    method: "post",
    url: "https://api-sandbox.facturify.com/api/v1/factura",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLXNhbmRib3guZmFjdHVyaWZ5LmNvbVwvYXBpXC92MVwvYXV0aCIsImlhdCI6MTYzMjUxNTMxNCwiZXhwIjoxNjMyNjAxNzE0LCJuYmYiOjE2MzI1MTUzMTQsImp0aSI6IjJlVTNha1NQZlRSRW01SVUiLCJzdWIiOjEwMDIsInBydiI6IjBhNWI5MDAwZDM0YTEzOTYxMThlNTQ4MzQyZWM0NDAxNmYwOGMzMzEifQ.w21yyHnUWdkC4vyJ5AVkQU5y_auZzUMOW2tFFQEF5u2-QHa7SiWrJJpQE5mEUCuRFmOp8i_mL_RI8BeyE_xaTw",
      "Content-Type": "application/json"
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      resp = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  res.send("solicitud exitosa");
});

router.post("/", function (req, res, next) {
  var axios = require("axios");
  var data = req.body;
  console.log(req.body);

  var config = {
    method: "post",
    url: "https://api-sandbox.facturify.com/api/v1/factura",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLXNhbmRib3guZmFjdHVyaWZ5LmNvbVwvYXBpXC92MVwvYXV0aCIsImlhdCI6MTYzMjUxNTMxNCwiZXhwIjoxNjMyNjAxNzE0LCJuYmYiOjE2MzI1MTUzMTQsImp0aSI6IjJlVTNha1NQZlRSRW01SVUiLCJzdWIiOjEwMDIsInBydiI6IjBhNWI5MDAwZDM0YTEzOTYxMThlNTQ4MzQyZWM0NDAxNmYwOGMzMzEifQ.w21yyHnUWdkC4vyJ5AVkQU5y_auZzUMOW2tFFQEF5u2-QHa7SiWrJJpQE5mEUCuRFmOp8i_mL_RI8BeyE_xaTw",
      "Content-Type": "application/json"
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      resp = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  res.send("solicitud exitosa post");
});

module.exports = router;
