const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const morgan = require('morgan');
const setup = require('./config/initialSetup');
const app = express();
setup.createRoles();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan);

const userRouter = require('./routers/userRouter');
const userTypeRouter = require('./routers/userTypeRouter');
const productRouter = require('./routers/productRouter');
const productCategoryRouter = require('./routers/productCategoryRouter');
const orderRouter = require('./routers/orderRouter');
const authRouter = require('./routers/authRouter');

app.use('/user',userRouter);
app.use('/userType',userTypeRouter);
app.use('/product',productRouter);
app.use('/productCategory',productCategoryRouter);
app.use('/order',orderRouter);
app.use('/',authRouter);

module.exports = app;