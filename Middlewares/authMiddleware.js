const auth = (req, res, next) => {
  if (req.headers["appkey"] != "pass123code") {
    res.send("Unauthorized").status(401);
  }

  next();
};

module.exports = auth;
