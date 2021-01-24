
import {Conta} from './Conta.js'

export class ContaCorrente extends Conta {
  static numeroDeContas = 0; //reglete as alterações em todos os objetos dessa classe
//chama construtor da classe pai
  constructor(cliente, agencia) {
    super(0, cliente, agencia) 
    ContaCorrente.numeroDeContas += 1
  }

  //sobreescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1
    return this._sacar(valor, taxa)
  }

}
