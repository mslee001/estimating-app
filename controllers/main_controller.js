const db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/customer", function (req, res) {
    res.render("addCustomer");
  });

  app.get("/preparer", function (req, res) {
    res.render("addPreparer");
  });

  app.get("/quote", function (req, res) {
    db.Customer.findAll({})
      .then(function (dbCustomer) {
        db.Preparer.findAll({})
          .then(function (data) {
            res.render("quote", {
              customers: dbCustomer,
              preparers: data
            });
          
        })
      
    })
  });
}