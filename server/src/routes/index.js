const siteRouter = require("./site");
const TourRouter = require("./tours");
const AreaRouter = require("./areas");
function route(app) {
  app.use("/test", (req, res, next) => {
    res.send("Hello World!");
  });
  app.use("/tours", TourRouter);
  app.use("/areas", AreaRouter);

  // app.use("/news", newsRouter);
  app.use("/", siteRouter);
}
module.exports = route;
