var ObjectID = require('mongodb').ObjectID;
module.exports = function(db){
  var UsModel = {};
  var USColl = db.collection('usuarios');
  UsModel.insertUs = function(email,nombreusuario,primerapellido,segundoapellido,telefono,
    identidad,fechanac,contrasena,handler){
    var us = {"email" : email,
                "nombreusuario" :nombreusuario,
                "primerapellido":primerapellido,
                "segundoapellido":segundoapellido,
                "telefono":telefono,
                "identidad":identidad,
                "fechanac":fechanac,
                "contrasena":contrasena};
                USColl.insertOne(us,function(err,rslt){
                  if(err){
                    handler(err,false);
                  }else{
                    handler(null,true);
                  }
                });
  };
  UsModel.getUsById=function(idString, handler){
    var query = {"_id":new ObjectID(idString)};
    USColl.findOne(query,function(err,doc){
      if(err || !doc){
        if(err){
          handler(err,null);
        }else{
          handler(new Error("No existe este documento"),null);
        }
      }else{
        handler(null,doc);
      }
    });
  };

  UsModel.getAllUS=function(idString, handler){
    /*var query = {"_id":new ObjectID(idString)};*/
    USColl.find({}).toArray(function(err,products){
      if(err){
        console.log(err);
        handler(err,null);
      }else{
        handler(null,usersr);
      }
    });
  };


  return UsModel;
};
