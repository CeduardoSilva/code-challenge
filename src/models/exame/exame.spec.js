let chai = require('chai');
let expect = chai.expect;
let Exame = require('./exame')

describe('Exame Model', () => {

    it("sets status as 'ativo' by default", () => {
        let exam = new Exame({
            nome: "Nome",
            tipo: "imagem",
            laboratorios: [ "lab_id"]
        })
        expect(exam.status).to.equal('ativo')
    })

    it("sets laboratorios as empty array by default", () => {
        let exam = new Exame({
            nome: "Nome",
            tipo: "imagem"
        })
        expect(exam.laboratorios).to.deep.equal([])
    })

    it("associates a laboratorio id to exame", () => {
        let exam = new Exame({
            nome: "Nome",
            tipo: "imagem"
        })
        exam.associate("lab_id")
        expect(exam.laboratorios[0]).to.equal("lab_id")
    })

    it("disassociates a laboratorio id to exame", () => {
        let exam = new Exame({
            nome: "Nome",
            tipo: "imagem",
            laboratorios: ["lab_id"]
        })
        exam.disassociate("lab_id")
        expect(exam.laboratorios).to.deep.equal([])
    })

    it('throws error if invalid nome', () => {
        let errorMessage = "Nome must be a string"
        expect(() => new Exame({
            nome: 0,
            tipo: "imagem",
            laboratorios: [ "lab_id"]
        })).to.throw(errorMessage)
    })

    it('throws error if invalid tipo', () => {
        let errorMessage = "Tipo must be a 'analise clinica' or 'imagem'"
        expect(() => new Exame({
            nome: "Nome",
            tipo: "analise",
            laboratorios: [ "lab_id"]
        })).to.throw(errorMessage)
    })

})