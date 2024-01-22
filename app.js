const express = require("express");
const app = express();
const router = require("./router/router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(8080, function (request, response) {
  console.log("Servidor Rodando na porta 8080");
});
