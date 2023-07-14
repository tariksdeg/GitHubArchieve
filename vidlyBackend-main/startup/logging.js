const winston = require("winston");
// require("winston-mongodb");
require("express-async-errors"); // sadece bu kodla hata kontrolü yapıyoruz model içindeki asyncmiddleware kullanmamıza gerek kalmıyor


module.exports = function(){
    // process.on('uncaughtException',(ex) => {
//   winston.error(ex.message,ex)
//   process.exit(1)
// })

winston.exceptions.handle(
    new winston.transports.Console({colorize:true,prettyPrint:true}),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  ); // üstteki 3 kod ile aynı
  
  process.on("unhandledRejection", (ex) => {
    // winston.error(ex.message,ex)
    // process.exit(1)
    throw ex;
  });
  
  // winston.add(winston.transports.File,{filename:'logfile.log'}) // eski versiyon
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  // winston.add(new winston.transports.MongoDB({db:'mongodb://localhost:27017/vidly'},level:'info'))  //mongoDB içine log dosyası oluşturuyor hata bilgisi için
  
}