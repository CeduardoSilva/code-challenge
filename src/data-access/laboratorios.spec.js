let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let laboratorioDB = require('./laboratorios')
let Laboratorio = require('../models/laboratorio/laboratorio')
let mongoose = require('mongoose');
let Mockgoose = require('mockgoose').Mockgoose;
let mockgoose = new Mockgoose(mongoose);

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

describe('Laboratorios Data-Access', () => {

    before((done) => {
        mockgoose.prepareStorage().then(function () {
            mongoose.connect('mongodb://localhost/TestingDB', { useNewUrlParser: true, useUnifiedTopology: true }, async _ => {

                var testLabA = await laboratorioDB.save(testLaboratorioA)
                testId = testLabA._id

                await laboratorioDB.save(testLaboratorioB)

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
        laboratorioDB.save(testLaboratorioC).should.eventually.have.property("_id").and.notify(done)
    })

    it("updates a existing laboratorio", () => {
        laboratorioDB.update(testId,testNewLaboratorio).should.eventually.have.property("nModified").equal(1)
    })

    it("removes a existing laboratorio by setting its status to 'inativo'", () => {
       laboratorioDB.setInactive(testId).should.eventually.have.property("nModified").equal(1)
    }) 

    it("gets a list of active laboratorios", (done) => {
        laboratorioDB.findActiveLaboratorios().should.eventually.be.an('array').and.notify(done)
    })

})