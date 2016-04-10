var ObjectID = require('mongodb').ObjectID;

module.exports =function(db){
  var userColl = db.collection('users');
  var userModel = {};
  this.getEmptyUsers = function(){
    return{
      "email":"",
      "nombre":"",
      "primerapellido":"",
      "segundoapellido":"",
      "telefono":"",
      "identidad":"",
      "fechanac":Date(),
      "contrasena":"",
      "rol":0
    };
  }

  this.getEmptyRol = function(){
    return{
      "rolest":"",
      "descrol":""
    };
  }

this.saveNewUsers(alias,usertype,handler){
  var newP =this.getEmptyUsers();
  newP.alias = alias || "New Usuarios";
  switch (usertype) {
    case "admon":
    newP.rol=0;
    break;
    default:
    newP.rol = 1;
    //none

  }
        userModel.insertUser = function(useremail,userpswd,handler){
          var user = {"userEmail" : useremail,
                      "password" :userpswd};

                      userColl.insertOne(user,function(err,rslt){
                        if(err){
                          handler(err,false);
                        }else{
                          handler(null,true);
                        }
                      });
        };
      userModel.getUserById=function(idString, handler){
        var query = {"_id":new ObjectID(idString)};
        userColl.findOne(query,function(err,doc){
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
  return userModel;
};
