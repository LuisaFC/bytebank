import {Cliente} from "./Cliente.js"

export class ContaCorrente {
  agencia;
  _cliente;

  //getters and setters
  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor
    }
  }

  get cliente(){
    return this._cliente
  }

  //#saldo
  _saldo = 0; //deixando atributo privado

  get saldo(){
    return this._saldo
  }

  // Encapsulamento
  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor
      return valor
    }
  }

  depositar(valor){
    if(valor <= 0) return //early return

    this._saldo += valor
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado)
  }
}
