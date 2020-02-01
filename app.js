const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { get404 } = require("./controllers/error");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const sequelize = require("./util/database");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(get404);

sequelize
  .sync()
  .then(res => {
    app.listen(3000);
  })
  .catch(e => console.log(e));
