var ObjectID = require('mongodb').ObjectID;
module.exports = function(db) {
  var userModel = {};
  var userColl = db.collection('users');
  userModel.insertnew = function(useremail, userpswd, handler) {
    var user = {
      "userEmail": useremail,
      "password": userpswd
    };
    userColl.insertOne(user, function(err, rslt) {
      if (err) {
        handler(err, false);
      } else {
        handler(null, true);
      }
    });
  };
  userModel.getUserById = function(idString, handler) {
    var query = {
      "_id": new ObjectID(idString)
    };
    userColl.findOne(query, function(err, doc) {
      if (err || !doc) {
        if (err) {
          handler(err, null);
        } else {
          handler(new Error("No existe este documento"), null);
        }
      } else {
        handler(null, doc);
      }
    });
  };
  return userModel;
};
