const Orders = require('../src/order');
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
const carID = require('../src/cars');



describe("Order Route", () => {
  describe("/GET order", () => {
    it("it should GET all the Orders", done => {
      chai
        .request(server)
        .get("/orders")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");          
          res.body.should.have.property('status').eql(res.statusCode);        
          done();
        });
    });
  });

  describe("/POST Order", () => {
    it("it should post an Order", done => {
      let order = {            
       "amount": 2200,
      "status": "pending"
      };
      chai
        .request(server)
        .post("/orders")
        .send(order)
        .end((err, res) => {          
          res.should.have.status(201);          
          res.body.should.be.a("object");
          res.body.should.have.property('status').eql(res.statusCode);
          res.body.should.have.property('message').eql('order uploaded!');         
          done();
        });
    });
  });

  describe("/GET/:id order", () => {
    it("it should GET a single order ", done => {    
      let order = {       
        "id": 1,
      "buyer": 1,
      "car_id": 1,
      "amount": 5200,
      "status": "pending",
      "created_on": "Wed Jun 05 2019 17:06:58 GMT+0100 (West Africa Standard Time)",
      "price_offered": "xxxxxx"
      };       
             
        chai
          .request(server)
          .get("/orders/" + order.id)
          .send(order)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property('status').eql(res.statusCode);           
            done();
          });
      });

  });

  

describe('/PATCH/:id order', () => { 
    it('it should UPDATE amount and status of an order', (done) => {
      let order = { 
        "id": 1,
        "buyer": 1,
        "car_id": 1,
        "amount": 5200,
        "status": "pending",
        "created_on": "Wed Jun 05 2019 17:06:58 GMT+0100 (West Africa Standard Time)",
        "price_offered": "xxxxxx"    
      };      
              chai.request(server)
              .patch('/orders/' + order.id)
              .send({                              
              status: "Accepted",
              amount:  12500                                      
              })
              .end((err, res) => {                  
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('order updated!');
                    res.body.should.have.property('status').eql(res.statusCode);                   
                done();
              });
        });
    });

});


