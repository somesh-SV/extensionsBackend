const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const url = "mongodb://localhost/TestDB";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const routers = require("./routers/routes");
app.use("/", routers);

con.on("open", () => {
  console.log("connected...");
});

app.listen(2400, () => {
  console.log("server started... ");
});
