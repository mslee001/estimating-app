var db = require("../models");

module.exports = function (app) {

    app.post("/api/quotes", (req, res) => {
        db.Quote.create(req.body).then(function (dbQuote) {
            res.json(dbQuote);
        });
    });
}