const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

const Handlebars = require('handlebars');
const {
  allowInsecurePrototypeAccess
} = require('@handlebars/allow-prototype-access');
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "handlebars");

require("./controllers/quote_controller.js")(app);
require("./controllers/preparer_controller.js")(app);
require("./controllers/customer_controller.js")(app);
require("./controllers/main_controller")(app);

db.sequelize.sync({force: false}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});