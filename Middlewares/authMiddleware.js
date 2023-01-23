const auth = (req, res, next) => {
  if (req.headers["appkey"] != "header@pwd") {
    res.send("Unauthorized").status(401);
  }

  next();
};

module.exports = auth;
