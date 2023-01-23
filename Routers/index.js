const express = require("express");
const route = express.Router();
const Ctrl = require("./../Controllers");

route.get("/", (req, res) => {
  res.send({ message: "HomePage", owner: "Tilak Singh" });
});
route.get("/create", Ctrl.Create);
route.get("/read", Ctrl.Read);
route.get("/update", Ctrl.Update);
route.get("/delete", Ctrl.Delete);

module.exports = route;
