// const asyncMiddleware = require('../middleware/async')
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Genre, validate } = require("../models/genre");

// router.get("/", async (req, res) => {
//   try {
//     const genres = await Genre.find().sort("name");
//     res.send(genres);
//   } catch (ex) {
//     next(ex);
//   }
// });
router.get("/", async (req, res) => {
  throw new Error('Could not get Genres.')  // winston paketinden dolayı yazdık (console yazdı)
    const genres = await Genre.find().sort("name");
    res.send(genres);
   
});
// router.get("/", asyncMiddleware(async (req, res) => {  // yukardaki kodu bir fonksiyon yazarak içine olduk.Fonksiyonu başka bir componente yazdık
 
//     const genres = await Genre.find().sort("name");
//     res.send(genres); 
   
// }));

router.post("/", auth, async (req, res) => {
  // yazdığımız auth middleware func ile ancak yetkisi olanın yapabilmesini sağlıyoruz
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();

  res.send(genre);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    new: true,
  });

  if (!genre) {
    res.status(404).send("The course with the given ID not found");
    return;
  }
  res.send(genre);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if (!genre)
    return res.status(404).send("The course with the given ID not found");
  res.send(genre);
});

router.get("/:id", async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  if (!genre) return res.status(404).send("Not found");
  res.send(genre);
});

module.exports = router;
