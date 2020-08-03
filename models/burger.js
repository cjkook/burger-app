// use orm functions
var orm = require("../config/orm.js");

let modelBurger = {
  all: function (cb) {
    orm.getAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.insertItem("burgers", name, function (res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update(condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller 
module.exports = modelBurger;
