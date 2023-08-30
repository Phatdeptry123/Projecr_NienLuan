const siteRouter = require("./site");
const TourRouter = require("./tours");
const AreaRouter = require("./areas");
const UserRouter = require("./users");
const LoginRouter = require("./login");

function route(app) {
  app.use("/login", LoginRouter);
  app.use("/test", (req, res, next) => {
    res.send("Hello World!");
  });
  app.use("/tours", TourRouter);
  app.use("/areas", AreaRouter);
  app.use("/users", UserRouter);
  // app.use("/news", newsRouter);
  app.use("/", siteRouter);
}
module.exports = route;
