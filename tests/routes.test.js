const chai  = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../app");


describe("routes", function () {

  it("should return the Root route", function(done) {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.server_status).to.equal("working");
        done();
      });
  });

  it("should return a footprint object for the footprint route", function(done) {
    chai.request(app)
      .get('/footprint')
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.footprint).to.be.an("object");
        done();
      });
  });

  it("should return an array of footprintPerDay(objects) for the footprintPerDay route", function(done) {
    chai.request(app)
      .get('/footprintPerDay')
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.footprintPerDay).to.be.an("array");
        done();
      });
  });

  it("/dataFromExternalFinancialSources should return array of objects", function(done) {
    chai.request(app)
      .get('/dataFromExternalFinancialSources')
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.dataFromExternalFinancialSources).to.be.an("array");
        chai.expect(res.body.dataFromExternalFinancialSources.length).to.equal(15);
        done();
      });
  });

  it("should return a transactions array for the transactions route", function(done) {
    chai.request(app)
      .get('/transactions')
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.transactions).to.be.an("array");
        done();
      });
  });

});
