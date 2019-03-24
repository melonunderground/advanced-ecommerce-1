let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://me:me12345@ds113402.mlab.com:13402/commerceorder");

let ProductRoutes = require("./routes/ProductRoutes");
let OrderRoutes = require("./routes/OrderRoutes");

const app = express();
app.use(bodyParser.json());

app.use(ProductRoutes);
app.use(OrderRoutes);



app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});