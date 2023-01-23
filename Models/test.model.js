const Sequelize = require("sequelize");
const { sequelize } = require("./../DBConfigs/db");

const test = sequelize.define(
  "Test_Table_Name",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    LastName: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    Address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    DOB: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    CurrentLocation: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = test;
