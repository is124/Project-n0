const express = require("express");
const app = express();
const PORT = 8081;
const Routes = require("./Routers");

app.use("/v1", Routes);

app.listen(PORT, () => {
  console.log("Server running ... ");
});

// EntryFile(express index.js) --> Router ----> Controllers ----> Providers ----> Repo
