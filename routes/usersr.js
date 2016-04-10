var express = require('express');
var router = express.Router();

function getUsRoute(db) {

  var UsModel = require('../models/usersr.model.js')(db);

  /*aplicacion de insercion*/
  router.get('/newusers', function(req, res, next) {
    res.render('registrarus', {});
  });

  router.post('/insertUs', function(req, res, next) {

    UsModel.insertUs(req.body.email, req.body.nombreusuario, req.body.primerapellido,req.body.segundoapellido,
      req.body.telefono,req.body.identidad,req.body.fechanac,req.body.contrasena,function(err, status) {
      res.status(200).json({
        "status": "ok"
      });
    });
  });

  router.get('/getbyid/:id', function(req, res, next) {
    UsModel.getUsById(req.params.id, function(err, doc) {
      if (err) {
        res.status(500).json({
          "err": err
        });
      } else {
        res.status(200).json(doc);
      }
    });
  });

  router.get('/listUs', function(req, res, next) {
    UsModel.getAllUsers(req.params.id, function(err, doc) {
      if (err) {
        res.status(500).json({
          "err": err
        });
      } else {
        res.status(200).json(doc);
      }
    });
  });


  return router;
}

module.exports = getUsRoute;
