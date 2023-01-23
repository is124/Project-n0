const test = require("./../Models/test.model");

const Create = () => {};

const Read = () => {
  return test.findAll();
};

const Update = () => {};

const Delete = () => {};

module.exports = { Create, Read, Update, Delete };
