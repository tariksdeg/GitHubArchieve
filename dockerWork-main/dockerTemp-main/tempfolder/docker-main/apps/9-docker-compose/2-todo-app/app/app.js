const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

const dbName = "dbName";
const tableName = "tableName";
const Users = mongoose.model(tableName, new mongoose.Schema({ name: String, age: Number }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  Users.find({})
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(500).json(e));
});

app.post("/post", (req, res) => {
  const postData = new Users({ ...req.body });
  postData
    .save()
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(400).json(e));
});

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT} port. MongoDB will be up...`);
  // await mongoose.connect("mongodb://127.0.0.1:27017/dbName", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  await mongoose.connect("mongodb://db:27017/dbName", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // await mongoose.connect(`mongodb://0.0.0.0:27017/${dbName}`, {});
  // await mongoose.connect(`mongodb://mongo-alias:27017/${dbName}`, {});
  await console.log(`Connected to MongoDB-${dbName}`);
  await new Users({ name: "testName", age: 88 }).save().catch((e) => console.log(e));
});
