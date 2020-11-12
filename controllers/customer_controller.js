var db = require("../models");

module.exports = function (app) {

    app.get("/api/customers", (req, res) => {
        db.customers.findAll({}).then(function (customers) {
            res.render
        });
    });

    app.post("/api/customers", (req, res) => {
        db.Customer.create(req.body).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });
}