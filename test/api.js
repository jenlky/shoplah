let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('API', () => {
  // test the /GET route
  describe('/GET request', () => {
    it('it should GET all the products', (done) => {
      chai.request(server)
        .get('/products.json')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          done();
        });
    });
  });
  
  // test if each object have image, price, currency, name property
  describe('Each Object', () => {
    it('it should have image, price, current and name property', done => {
      chai.request(server)
        .get('/products.json')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          for (let x = 0; x < res.body.data.length; x++) {
            res.body.data[x].should.have.property('image');
            res.body.data[x].should.have.property('price');
            res.body.data[x].should.have.property('currency');
            res.body.data[x].should.have.property('name');
          }
          done();
        });
    });
  }); 
});


describe('front-end', () => {
  
}); 