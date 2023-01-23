const Create = (req, res) => {
  try {
    res.send({ location: "Controllers", method: "Create" });
  } catch (err) {
    console.log(err);
  }
};

const Read = (req, res) => {
  try {
    res.send({ location: "Controllers", method: "Read" });
  } catch (err) {
    console.log(err);
  }
};

const Update = (req, res) => {
  try {
    res.send({ location: "Controllers", method: "Update" });
  } catch (err) {
    console.log(err);
  }
};

const Delete = (req, res) => {
  try {
  } catch (err) {
    res.send({ location: "Controllers", method: "Delete" });
  }
};

module.exports = { Create, Read, Update, Delete };
