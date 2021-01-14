//index deve ser apenas para execução

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//Criando novo cliente(objeto) a partir do molde(classe)
const cliente1 = new Cliente(); // instancia da classe cliente, usando o new
const cliente2 = new Cliente(); // instancia da classe cliente

//Add info aos atributos de cliente
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contCorrenteRicardo = new ContaCorrente();
contCorrenteRicardo.agencia = 1001
contCorrenteRicardo.cliente = cliente1
contCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 103

contCorrenteRicardo.transferir(200, conta2)


console.log(contCorrenteRicardo);
console.log(conta2);