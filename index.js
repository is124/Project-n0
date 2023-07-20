const express = require("express");
const app = express();
const PORT = 8081;
const Routes = require("./Routers");
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // access-control-allow-credentials: true
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/v1", Routes);

app.listen(PORT, () => {
  console.log("Server running ... ");
});

// Request journey = EntryFile (express index.js) --> Router ----> Controllers ----> Providers ----> Repo
