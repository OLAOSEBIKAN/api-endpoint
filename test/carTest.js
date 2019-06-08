
const Cars = require("../models/carModel");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
const userID = require('../src/users');

/*
 * Test the /GET route
 */

describe("Car Route", () => {
  describe("/GET Car", () => {
    it("it should GET all the Cars", done => {
      chai
        .request(server)
        .get("/cars")
        .end((err, res) => {
          res.should.have.status(200);         
          res.body.should.be.a("object");          
          res.body.should.have.property('status').eql(res.statusCode);
          //res.body.should.have.property('data').eql(Cars);
          //res.body.should.be.eql(0);
          done();
        });
    });
  });

  describe("/POST Car", () => {
    it("it should post a car", done => {
      let car = {            
        "state": "Used",
        "status": "Sold",
        "price":  1200,
        "manufacturer": "BMW",
        "model": "SUV",
        "body_type": "Truck"
      };
      chai
        .request(server)
        .post("/cars")
        .send(car)
        .end((err, res) => {          
          res.should.have.status(201);
          //err.should.have.status(500);           
          res.body.should.be.a("object");
          res.body.should.have.property('status').eql(res.statusCode);
          res.body.should.have.property('message').eql('car uploaded!');         
          //res.body.errors.should.have.property('name');
          //res.body.errors.pages.should.have.property('kind').eql('required');
          done();
        });
    });
  });

  describe("/GET/:id Car", () => {
    it("it should GET a single car ", done => {    
      let car = {       
      "id": 1,
      "owner": 1,
      "created_on": "Wed Jun 05 2019 17:10:00 GMT+0100 (West Africa Standard Time)",
      "state": "Used",
      "status": "Sold",
      "price": "$ 1,200",
      "manufacturer": "BMW",
      "model": "SUV",
      "body_type": "Car"
      };       
             
        chai
          .request(server)
          .get("/cars/" + car.id)
          .send(car)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property('status').eql(res.statusCode);           
            //res.body.should.have.property('price');
            //res.body.should.have.property('id').eql(car.id);
            done();
          });
      });

  });

  describe("/DELETE/:id Car", () => {
    it("it should DELETE a car with the given id", done => {
      let car = {       
        id: Cars.length + 1,
        owner: userID[1].id,
        created_on: Date(),
        state: "Used",
        status: "Sold",
        price: "$ 1,200",
        manufacturer: "BMW",
        model: "SUV",
        body_type: "Car"
      };       
      
        chai
          .request(server)
          .delete("/cars/" + car.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            //res.body.should.have.property('message').eql('Book successfully deleted!');
           // res.body.result.should.have.property('ok').eql(1);
           // res.body.result.should.have.property('n').eql(1);
            done();
          });
      });

  });

describe('/cars/:id Car', () => { 
    it('it should UPDATE price and status of a car given the id', (done) => {
      let car = { 
        id: 5,
        owner: userID[1].id,
        created_on: Date(),
        state: "Used",
        status: "Sold",
        price:  1200,
        manufacturer: "BMW",
        model: "SUV",
        body_type: "Car"      
      };      
              chai.request(server)
              .patch('/cars/' + car.id)
              .send({                              
              status: "Available",
              price:  12500                                      
              })
              .end((err, res) => {                  
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('user updated!');
                    res.body.should.have.property('status').eql(res.statusCode);
                    //res.body.should.have.property("data").eql(Cars);
                    //res.body.user.should.have.property('year');
                    //res.body.result.should.have.property('ok').eql(1);
                    //res.body.result.should.have.property('n').eql(1);
                done();
              });
        });
    });

});


