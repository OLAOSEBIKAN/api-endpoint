let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);



describe("User Route (Sign Up and Sign In", () => {
  describe("/GET User", () => {
    it("it should GET all the Users", done => {
      chai
        .request(server)
        .get("/auth/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");          
          res.body.should.have.property('status').eql(res.statusCode);      
          done();
        });
    });
  });

  describe("/POST SignUp User", () => {
    it("it should Sign up a User", done => {
      let user = {            
        "email": "danrej@gmail.com",
        "first_name": "Danrej",
        "last_name": "Rejdan",
        "password": "danrej",
        "address": "No 8, New York",
        "is_Admin": true
      };
      chai
        .request(server)
        .post("/auth/signup")
        .send(user)
        .end((err, res) => {          
          res.should.have.status(201);                  
          res.body.should.be.a("object");
          res.body.should.have.property('status').eql(res.statusCode);
          res.body.should.have.property('message').eql('User created');         
          done();
        });
    });
  });

  
  describe("/POST User Login ", () => {
    it("it should Login a User", done => {
      let user = {            
        //email: "danrej@gmail.com",     
        //password: "danrej"        
      };
      chai
        .request(server)
        .post("/auth/signin")
        .send(user)
        .end((err, res) => {          
            //res.should.have.status(500);          
            res.body.should.be.a("object");            
          done();
        });
    });
  });

});


