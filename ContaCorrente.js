
export class ContaCorrente {
  agencia;
  cliente;


  //#saldo
  _saldo = 0; //deixando atributo privado

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
