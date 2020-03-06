let express = require("express");
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 8092;

app.use(express.static("public"));
app.use(express.static( "public/assets/img" ));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });