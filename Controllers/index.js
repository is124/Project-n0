const provider = require("./../Providers/index");

const Create = async (req, res) => {
  try {
    res.send({ location: "Controllers", method: "Create" });
  } catch (err) {
    console.log(err);
  }
};

const Read = async (req, res) => {
  try {
    const ReadPov = await provider.Read();

    if (ReadPov.isSuccess) {
      res.json({ isSuccess: 1, data: ReadPov.data });
    }
  } catch (err) {
    console.log(err);
  }
};

const Update = async (req, res) => {
  try {
    res.send({ location: "Controllers", method: "Update" });
  } catch (err) {
    console.log(err);
  }
};

const Delete = async (req, res) => {
  try {
  } catch (err) {
    res.send({ location: "Controllers", method: "Delete" });
  }
};

module.exports = { Create, Read, Update, Delete };
