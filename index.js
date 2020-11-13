const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//App.get que llamará a la api de google

app.get("/nuevaPartida", function (req, res) {
  fetch(
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyCZfnGYC_O2gVusW20V7sSmke3f2ckh04Y&cx=017576662512468239146:omuauf_lfve&q=lectures"
  )
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      res.send(datos);
    });
});

app.listen(3000);
