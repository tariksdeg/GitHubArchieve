const startupDebugger = require('debug')('app:startup')  // terminale export DEBUG=app:startup
const dbDebugger = require('debug')('app:db')   // terminale export DEBUG=app:db , DEBUG=(böyle sıfırlanır) , DEBUG=app:startup,app:db veya *
const config = require('config')
const Joi = require("joi");
const morgan = require('morgan')
const helmet = require('helmet')
const logger = require('./logger')
const express = require("express");
const app = express();
const courses =require('./routes/courses')
const home = require('./routes/home')

app.set('view engine','pug') // require etmemize gerek kalmadı otomatik bu kodla yapıyor
app.set('views','./views')
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

// Configuration
console.log('Application Name:' + config.get('name'))  // export NODE_ENV=development or production , config klasör içine .json bak
console.log('Mail Server :' + config.get('mail.host'))
console.log('Mail Password:' + config.get('mail.password')) // terminale export app_password=1234 diye tanımlandı

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(helmet())
app.use(logger)
app.use('/api/courses',courses)
app.use('/',home)

if(app.get('env') === 'development'){
  app.use(morgan('tiny'))
// console.log('Morgan enabled...')
startupDebugger('Morgan enabled...')
}

dbDebugger('Connected to the database...')





const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening ${port}`);
});