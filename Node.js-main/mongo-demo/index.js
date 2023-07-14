const mongoose = require("mongoose");

const url = "mongodb://localhost:27018/playground";

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: {type:String,
     required:true,
     minlenght:5,
     maxlength:255,
    //  match:/pattern/
    },
    category:{
        type: String,
        required:true,
        enum: ['web','mobile','network']
    },
  author: String,
//   tags: [String],
  tags: {
    type: Array,
    validate:{
        validator:function(v) {
            return v && v.length > 0
        },
        message:'Should be at least one tag'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required:function(){return this.isPublished} // eğer isPublished true ise price zorunlu olacak
  }
});

const Course = mongoose.model("Course", courseSchema); // Const Course Course C büyük olması bunun bir class olduğunu obje olmadığını belirtir
async function createCourse() {
  const course = new Course({
    // Bu obje
    name: "Node.js Course",
    author: "Mosh",
    tags: ["node", "backend"],
    isPublished: true,
    price:100
  });
try{
     const result = await course.save();
  console.log(result); 
}
catch(ex){
    console.log(ex.message)
}
}
createCourse()

async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;

  course.isPublished = true;
  course.author = "New Author";

  const result = await course.save();
  console.log(result);
}

updateCourse();

async function updateCourse2(id) {
  const result = await Course.update(
    { _id: id },
    {
      $set: {
        author: "Mosh",
        isPublished: false,
      },
    }
  );
  console.log(result);
}

updateCourse2();

async function updateCourse3(id) {
  const course = await Course.findByIdAndUpdate(
    { id },
    {
      $set: {
        author: "Jack",
        isPublished: true,
      },
    },
    { new: true }
  );
  console.log(result);
}

updateCourse3();

async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
  const course = await Course.findByIdAndRemove({ id });
  console.log(course);
}

removeCourse();

// async function getCourse(){
//     // const course = await Course.find()  // hepsini getirir
//     const pageNumber = 2
//     const pageSize = 10

//     const course = await Course
//     .find({ author:'Mosh' , isPublished:true})
//     .skip((pageNumber - 1) * pageSize)
//     .limit(pageSize)
//     // .limit(10)              // sadece 10 özellik istediğimizi belirtiyoruz
//     .sort({name:1})         // 1 ascending -1 descending  sıralamayı namelerindeki baş harflerine göre yapar
//     .select({name:1,tags:1})        // sadece name ve tagı göstermesini istedik
//     console.log(course)
// }

// getCourse()

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal)
// in
// nin ( not in)

// .find({price: {$gt: 10}}) // fiyatı 10dan büyük olanlar demek
// .find({price: {$gt: 10, $lt:20}})

// .find()
// .or([{author:'Mosh'}, {isPublished: true}])
// .and([{author:'Mosh'}, {isPublished: true}])

// REGULAR EXPRESSION

// Starts with Mosh
// .find({author: /^Mosh/}) bu şekilde Mosh ile baslayanları filtreleriz
// End with Hamedani
// .find({author: /Hamedani$/}) bu şekilde Hamedani ile bitenleri filtreleriz
// Contains Mosh
// .find({author:/.*Mosh.*/i}) insensitive yapmak istersek sonuna i koyarız
