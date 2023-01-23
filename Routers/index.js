const express = require("express");
const route = express.Router();
const Ctrl = require("./../Controllers");
const authMiddleware = require("./../Middlewares/authMiddleware");

route.get("/", (req, res) => {
  res.send({ message: "HomePage", owner: "Tilak Singh" });
});
route.get("/create", authMiddleware, Ctrl.Create);
route.get("/read", authMiddleware, Ctrl.Read);
route.get("/update", authMiddleware, Ctrl.Update);
route.get("/delete", authMiddleware, Ctrl.Delete);

module.exports = route;
