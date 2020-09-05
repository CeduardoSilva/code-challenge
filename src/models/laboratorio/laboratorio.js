const invalidNome = new Error("Nome must be a string")
const invalidEndereco = new Error("Endereco must be a string")
const invalidStatus = new Error("Status must be 'ativo' or 'inativo'")

class Laboratorio {
    constructor({ 
        nome, 
        endereco,
        status = 'ativo'
    }={}) {
        this.nome = nome 
        this.endereco = endereco 
        this.status = status
        this.validateInputs()
    }

    validateInputs(){
        this.validateNome()
        this.validateEndereco()
        this.validateStatus()
        return true
    }

    validateNome(){
        if(typeof this.nome != "string"){
            throw invalidNome
        }
    }

    validateEndereco() {
        if(typeof this.endereco != "string"){
            throw invalidEndereco
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

}

module.exports = Laboratorio;