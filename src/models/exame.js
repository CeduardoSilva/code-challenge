const invalidNome = new Error("Nome must be a string")
const invalidTipo = new Error("Tipo must be a 'analise clinica' or 'imagem'")
const invalidStatus = new Error("Status must be 'ativo' or 'inativo'")
const invalidLaboratorios = new Error("Status must be 'ativo' or 'inativo'")

class Exame {
    constructor({ 
        nome, 
        tipo,
        laboratorios = []
    }={}) {
        this.nome = nome 
        this.tipo = tipo 
        this.laboratorios = laboratorios
        this.status = 'ativo'
        this.validateInputs()
    }

    validateInputs(){
        this.validateNome()
        this.validateTipo()
        this.validateStatus()
        return true
    }

    validateNome(){
        if(typeof this.nome != "string"){
            throw invalidNome
        }
    }

    validateTipo() {
        if(this.tipo != 'analise clinica' && this.tipo != 'imagem'){
            throw invalidTipo
        }
    }

    validateLaboratorios() {
        if(!this.laboratorios.isArray()){
            throw invalidLaboratorios
        }
    }

    validateStatus() {
        if (this.status != 'ativo' && this.status != 'inativo') {
            throw invalidStatus;
        }
    }

    setAtivo(){
        this.status = 'ativo'
    }

    setInativo(){
        this.status = 'inativo'
    }

    associate(laboratorioId) {
        this.laboratorios.push(laboratorioId)
    }

    disassociate(laboratorioId) {
        this.laboratorios = this.laboratorios.filter(id => { return id != laboratorioId })
    }

}

module.exports = Exame;