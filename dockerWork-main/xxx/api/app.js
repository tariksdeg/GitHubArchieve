const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

const dbName = "dbName";
const tableName = "tableName";

const isDevelopment = process.env.isDevelopment || true;
let url = `mongodb://localDb:27017/${dbName}`;

if (isDevelopment) {
  // url = `mongodb://localhost:27017/${dbName}`;
}

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
  console.log(`Server running on ${PORT} port -isDevelopment:${isDevelopment}-. MongoDB will be up...`);
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await console.log(`Connected to MongoDB-${dbName}`);
  await new Users({ name: "testName", age: 88 }).save().catch((e) => console.log(e));
});
