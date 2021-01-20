//Uma classe(molde) possui atributos/propriedades

export class Cliente {
  
  get cpf() {
      return this._cpf;
  }

  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }
}
