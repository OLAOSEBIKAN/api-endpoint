let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);



describe("Flag Route", () => {
  describe("/GET flag", () => {
    it("it should GET all the Flags", done => {
      chai
        .request(server)
        .get("/flags")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");          
          res.body.should.have.property('status').eql(res.statusCode);      
          done();
        });
    });
  });

  describe("/POST flag", () => {
    it("it should post a flag", done => {
      let flag = {            
        "reason": "Pricing",
        "description": "The cost of purchase is too much"
      };
      chai
        .request(server)
        .post("/flags")
        .send(flag)
        .end((err, res) => {          
          res.should.have.status(201);          
          res.body.should.be.a("object");
          res.body.should.have.property('status').eql(res.statusCode);
          res.body.should.have.property('message').eql('flag posted!');         
          done();
        });
    });
  });

  


});


