let chai = require('chai');
let expect = chai.expect;
let Laboratorio = require('./laboratorio')

describe('Laboratorio', () => {

    it("sets status as 'ativo' by default", () => {
        let lab = new Laboratorio({
            nome: "Nome",
            endereco: "Endereco"
        })
        expect(lab.status).to.equal('ativo')
    })

    it('throws error if invalid nome', () => {
        let errorMessage = "Nome must be a string"
        expect(() => new Laboratorio({
            nome: 0,
            endereco: "Endereco"
        })).to.throw(errorMessage)
    })

    it('throws error if invalid endereco', () => {
        let errorMessage = "Endereco must be a string"
        expect(() => new Laboratorio({
            nome: "Nome",
            endereco: 0
        })).to.throw(errorMessage)
    })

    it('throws error if invalid endereco', () => {
        let errorMessage = "Endereco must be a string"
        expect(() => new Laboratorio({
            nome: "Nome",
            endereco: 0
        })).to.throw(errorMessage)
    })

})