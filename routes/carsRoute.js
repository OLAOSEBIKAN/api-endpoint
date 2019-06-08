const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = express.Router();
const validateCars = require('../models/carModel');
const Cars = require('../src/cars');
const userID = require('../src/users');


router.get('/', (req, res) => {
if(Cars) return res.status(200).json({status:res.statusCode,data:Cars})
//res.json(req.params);
//let kas = req.query
//res.json(Cars);
})


router.get('/:id', (req, res) => {    
    const car = Cars.find(c => c.id === parseInt(req.params.id));
    if(car) { 
        return res.status(200).json({status:res.statusCode,data:car});  
}else{
    return res.status(404).json({status:res.statusCode,
        error:'car with the given ID not found'})
};

})


router.post("/", (req, res) => {  
    const { error } = validateCars(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }else{
        const car = {
            id: Cars.length + 1,
            owner: userID[1].id,
            created_on: Date(),
            state: req.body.state,
            status: req.body.status,           
            price: req.body.price,
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            body_type: req.body.body_type,
          };
          Cars.push(car);
          //res.send(user);
          res.status(201).json({
              status:res.statusCode,
              data:car,
              message:'car uploaded!'
          })
    }
    
  });

  router.patch('/:id', (req,res) => {
   
    const car = Cars.find(c => c.id === parseInt(req.params.id));
    if(!car){
        res.status(404).json({status:res.statusCode,
            error:'car with the given ID not found'});
        return;
    }    
   const {error} = validateCars(req.body)
    if(error ) return  res.status(400).send(error.details[0].message);  
   car.status = req.body.status;  
   car.price = req.body.price; 
   res.status(200).json({
       status:res.statusCode,
       data: car,
       message: "user updated!"
   });
})

router.delete('/:id', (req, res) => {
    const car = Cars.find(c => c.id === parseInt(req.params.id));
    if(!car) return res.status(404).json({status:res.statusCode,
        error:'car with the given ID not found'});

    //delete
    const index = Cars.indexOf(car);
    Cars.splice(index, 1)
    // send 
    res.send(car)

})


module.exports = router;