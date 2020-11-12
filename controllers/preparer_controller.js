var db = require("../models");

module.exports = function (app) {

    app.get("/api/preparers", (req, res) => {
        db.preparers.findAll({}).then(function (preparers) {
            res.render
        });
    });

    app.post("/api/preparers", (req, res) => {
        db.Preparer.create(req.body).then(function (dbPreparer) {
            res.json(dbPreparer);
        });
    });
}