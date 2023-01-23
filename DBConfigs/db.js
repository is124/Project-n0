const Sequelize = require("sequelize");
const mysql2 = require("mysql2");
const config = require("./creds.config");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { sequelize };
