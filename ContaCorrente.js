
export class ContaCorrente {
  agencia;
  //#saldo
  _saldo = 0; //deixando atributo privado

  // Encapsulamento
  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor
      console.log("Após saque seu saldo é de: ", this._saldo);
      return valor
    }
  }

  depositar(valor){
    if(valor <= 0) return //early return

    this._saldo += valor
    console.log("Após o deposito seu saldo é de: ", this._saldo);
  }
}
