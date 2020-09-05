let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let examesController = require('./exames')
let Exame = require('../models/exame/exame')
let laboratorioController = require('./laboratorios')
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
    endereco: "Endereco",
    status: 'inativo'
})

let testExameA= new Exame({
    nome: "ExameA",
    tipo: "imagem"
})

let testExameB= new Exame({
    nome: "ExameB",
    tipo: "imagem",
    laboratorios: ["LAB1"]
})

let testNewExame = new Exame({
    nome: "ExameB",
    tipo: "analise clinica",
    laboratorios: ["LAB1"]
})

let testId
let activeLabId
let inactiveLabId

chai.use(chaiAsPromised);
chai.should();

describe('Exames Data-Access', () => {

    before((done) => {
        mockgoose.prepareStorage().then(function () {
            mongoose.connect('mongodb://localhost/TestingDB', { useNewUrlParser: true, useUnifiedTopology: true }, async _ => {
                
                var activeLab = await laboratorioController.save(testLaboratorioA)
                var inactiveLab = await laboratorioController.save(testLaboratorioB)

                var testExameDB = await examesController.save(testExameB)

                testId = testExameDB._id
                activeLabId = activeLab._id
                inactiveLabId = inactiveLab._id

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

    it("saves a new exame", (done) => {
        examesController.save(testExameA).should.eventually.have.property("_id").and.notify(done)
    })

    it("updates a existing exame", (done) => {
        examesController.update(testId,testNewExame).should.eventually.have.property("nModified").equal(1).and.notify(done)
    })

    it("removes a existing exame by setting its status to 'inativo'", (done) => {
       examesController.setInactive(testId).should.eventually.have.property("nModified").equal(1).and.notify(done)
    }) 

    it("gets a list of active exames", (done) => {
        examesController.findActiveExames().should.eventually.be.an('array').and.notify(done)
    })

    it("associates exame to a active laboratorio", (done) => {
        examesController.associate(testId, activeLabId).should.eventually.have.property("nModified").equal(1).and.notify(done)
    })

    it("disassociates exame from a active laboratorio", (done) => {
        examesController.disassociate(testId, "LAB1").should.eventually.have.property("nModified").equal(1).and.notify(done)
    })

    // it("fails to associate exame to a inactive laboratorio", (done) => {
    //     examesController.associate(testId, inactiveLabId).should.eventually.have.property("nModified").equal(0).and.notify(done)
    // })

})