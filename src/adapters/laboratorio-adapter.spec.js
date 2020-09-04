let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sandbox = require('sinon').createSandbox();
let expect = chai.expect;
let laboratorioAdapter = require('./laboratorio-adapter')
let Laboratorio = require('../models/laboratorio')
var mongoose = require('mongoose');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

let testLaboratorioA = new Laboratorio({
    nome: "A",
    endereco: "Endereco"
})

let testLaboratorioB = new Laboratorio({
    nome: "B",
    endereco: "Endereco"
})

let testLaboratorioC = new Laboratorio({
    nome: "C",
    endereco: "Endereco"
})
testLaboratorioC.setInativo()

let testNewLaboratorio = new Laboratorio({
    nome: "A2",
    endereco: "Endereco"
})

let testId;

chai.use(chaiAsPromised);
chai.should();

describe('Laboratorio Adapter', () => {

    before((done) => {
        mockgoose.prepareStorage().then(function () {
            mongoose.connect('mongodb://localhost/TestingDB', { useNewUrlParser: true, useUnifiedTopology: true }, async _ => {

                var testLabA = await laboratorioAdapter.save(testLaboratorioA)
                testId = testLabA._id

                await laboratorioAdapter.save(testLaboratorioB)

                done();

            })
        });
    });

    after((done) => {
        mongoose.disconnect().then(_ => {
            mockgoose.helper.reset().then(() => {
                done()
            });
        })
    })

    it("saves a new laboratorio", (done) => {
        laboratorioAdapter.save(testLaboratorioC).should.eventually.have.property("_id").and.notify(done)
    })

    it("updates a existing laboratorio", () => {
        laboratorioAdapter.update(testId,testNewLaboratorio).should.eventually.have.property("nModified").equal(1)
    })

    it("removes a existing laboratorio by setting its status to 'inativo'", () => {
       laboratorioAdapter.setInactive(testId).should.eventually.have.property("nModified").equal(1)
    }) 

    it("gets a list of active laboratorios", (done) => {
        laboratorioAdapter.findActiveLaboratorios().should.eventually.be.an('array').and.notify(done)
    })

})