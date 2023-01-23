const repo = require("./../Repo/index");

const Create = async () => {
  try {
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

const Read = async () => {
  try {
    const allData = repo.Read();

    if (!allData) {
      return {
        isSuccess: 0,
        data: [],
      };
    }

    return {
      isSuccess: 1,
      data: allData,
    };
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

const Update = async () => {
  try {
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

const Delete = async () => {
  try {
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

module.exports = { Create, Read, Update, Delete };
