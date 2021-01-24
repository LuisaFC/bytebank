
export class Conta{
  constructor(saldoInicial, cliente, agencia){
    this._saldo = saldoInicial 
    this._cliente = cliente
    this._agencia = agencia 
  }

  get cliente(){
    return this._cliente
  }

  get saldo(){
    return this._saldo
  }

  // Encapsulamento
  sacar(valor) {
    let taxa = 1
    const valorSacado = taxa * valor
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return; //early return

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}