let chai = require('chai');
let expect = chai.expect;
let Exame = require('./exame')

describe('Exame', () => {

    it("sets status as 'ativo' by default", () => {
        let exam = new Exame({
            nome: "Nome",
            tipo: "imagem"
        })
        expect(exam.status).to.equal('ativo')
    })

    it('throws error if invalid nome', () => {
        let errorMessage = "Nome must be a string"
        expect(() => new Exame({
            nome: 0,
            tipo: "imagem"
        })).to.throw(errorMessage)
    })

    it('throws error if invalid tipo', () => {
        let errorMessage = "Tipo must be a 'analise clinica' or 'imagem'"
        expect(() => new Exame({
            nome: "Nome",
            tipo: 0
        })).to.throw(errorMessage)
    })

})