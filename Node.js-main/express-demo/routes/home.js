const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    // res.send("Hello World");
    res.render('index',{title:'My Express App',message:"Hello"}) //index.bug dan dolayı index
  });

  module.exports = router