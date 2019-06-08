'use strict';

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = express.Router();
const bcrypt = require('bcrypt') 
const validateUser = require('../models/userModel');
const User = require('../src/users');


router.post('/signup', (req, res) => {   
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }else{
 bcrypt.hash(req.body.password, 10, (err, hash) => {
               if(err){
                return res.status(500).json({
                    error:err
                })
               }else{
                const user = {
                    id: User.length + 1,                  
                    email: req.body.email,
                    password:hash,
                    first_name: req.body.first_name,           
                    last_name: req.body.last_name,
                    address:req.body.address,
                    is_Admin:req.body.is_Admin
                };
               /* user.save()
                .then(result => {
                    console.log(result)
                    res.status(201).json({
                        status: res.statusCode,
                        message: 'User created'
                    })
                })
                .catch( err => {
                    res.status(500).json({
                        error: err
                    })
                })*/
                User.push(user);
                //res.send(user);
                res.status(201).json({                    
                    data:user,
                    status: res.statusCode,
                    message: 'User created'
                })
               }
            })           
        }
    })


    router.post('/signin', (req,res) => {
        let user = req.body.email;
       // User.includes(req.body.email)
       // .then(user => {
            if(user.length < 1){
                res.status(401).json({
                    status:res.statusCode,
                    message:'Auth failed'
                })
            }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if(err){
                        res.status(401).json({
                            status:res.statusCode,
                            message:'Auth failed'
                        }) 
                    } 
                    if(result){
                        res.status(200).json({
                            status:res.statusCode,
                            message:'Auth successful'
                        }) 
                    }   
                    res.status(401).json({
                        status:res.statusCode,
                        message:'Auth failed'
                    }) 
                })
               
        })
        //.catch(err => {
            //res.status(500).json({
            //    error:err
          //  })
        //})
    //})
    router.get('/users', (req,res) => {
        if(User) return res.status(200).json({
            status:res.statusCode,
            data:User
            
        })
    });

module.exports = router;