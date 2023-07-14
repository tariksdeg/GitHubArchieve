const express = require('express')
const router = express.Router()

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
  ];

router.get("/", (req, res) => {
    res.send(courses);
  });
  
  router.get("/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Not found");
    res.send(course);
  });
  
//   router.get("/api/posts/:year/:month", (req, res) => {
//     res.send(req.params);
//   });
  
  router.post("/", (req, res) => {
      const { error } = validateCourse(req.body);
  
      if (error)  return res.status(400).send(error.details[0].message);
      
    const course = {
      id: courses.length + 1,
      name: req.body.name,
    };
    courses.push(course);
    res.send(course);
  });
  
  router.put("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {res.status(404).send("The course with the given ID not found");
  return
  } 
  
    // const result = validateCourse(req.body)
    const { error } = validateCourse(req.body);
  
    if (error) return res.status(400).send(error.details[0].message);
      
    
  
    course.name = req.body.name;
    res.send(course);
  });
  
  router.delete('/:id',(req,res) => {
      const course = courses.find(c=>c.id === parseInt(req.params.id))
      if(!course) return res.status(404).send("The course with the given ID not found")
  
      const index = courses.indexOf(course)
      courses.slice(index,1)
      res.send(course)
  })
  
  
  function validateCourse(course) {
    const schema = {
      name: Joi.string().min(3).required(),
    };
    
    return Joi.validate(course, schema);
  }
  module.exports = router