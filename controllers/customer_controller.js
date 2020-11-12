var db = require("../models");

module.exports = function (app) {

    app.get("/api/customers", (req, res) => {
        db.Customer.findAll({}).then(function (data) {
            res.json({
                customers: data
            });
        });
    })

    app.post("/api/customers", (req, res) => {
        db.Customer.create(req.body).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });
}