const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

const userRouter = require('./routers/userRouter');
const userTypeRouter = require('./routers/userTypeRouter');

app.use('/user',userRouter);
app.use('/userType',userTypeRouter)

module.exports = app;