
const mongoose = require('mongoose');
//mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/webstore',  {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false})
    .then(() => {    
        console.log("La conexión a la base de datos Webstore se ha realizado correctamente")
    })
    .catch(err => console.log(err));