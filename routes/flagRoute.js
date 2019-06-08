const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = express.Router();
const validateFlags = require('../models/flagModel');
const Flags = require('../src/flag');
const carID = require('../src/cars');



router.get('/', (req, res) => {
    if(Flags) return res.status(200).json({status:res.statusCode,data:Flags})
   
    })
    

router.post("/", (req, res) => {  
    const { error } = validateFlags(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }else{
        const flag = {
            id:Flags.length + 1,
            car_id: carID[1].id,  
            created_on:Date(),                  
            reason: req.body.reason,           
            description: req.body.description         
            
          };
          Flags.push(flag);        
          res.status(201).json({
              status:res.statusCode,
              data:flag,
              message:'flag posted!'
          })
    }
    
  });



module.exports = router;