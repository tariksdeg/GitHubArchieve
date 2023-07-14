const jwt = require('jsonwebtoken')
const config = require("config")
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User} = require("../models/user");


router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");
 
 const validPassword = await bcrypt.compare(req.body.password,user.password) 
 if(!validPassword) return res.status(400).send("Invalid email or password");

 const token = user.generateAuthToken()

//  const token = jwt.sign({_id:user._id}, 'jwtPrivateKey') // sağdaki kısım istediğin gibi olabilir ama kod içinde olmamalı env içinde yazmalıyız güvenlik için
//  const token = jwt.sign({_id:user._id}, config.get('jwtPrivateKey'))  // terminale export vidly_jwtPrivateKey=mySecureKey(herhangi birşey yazılabilir)

 res.send(token)
});

function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
    };
  
    return Joi.validate(req, schema);
  }

module.exports = router;
