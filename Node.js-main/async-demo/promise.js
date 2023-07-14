const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)  // pending => resolved,fulfilled
        reject(new Error('Message'))   // pending => rejected
    },2000)
})

p.then(result => console.log('Result',result))
.catch(err => console.log('Error',err.message))