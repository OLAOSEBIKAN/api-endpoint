const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = express.Router();

const cars = require("./routes/carsRoute");
const orders = require("./routes/orderRoute");
const flags = require("./routes/flagRoute");
const user = require("./routes/userRoute");


app.get('/', (req,res) => {
res.json({
Title:"Carimu AutoMart",
    Cars:"/cars",
    Orders:"/orders",
    Flags:"/flags",
    SignUp:"/auth/signup",
    Users:"/auth/users"
    
})
})
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
app.use( '/cars', cars);
app.use( '/orders', orders);
app.use( '/flags', flags);
app.use( '/auth', user);


module.exports = app;
