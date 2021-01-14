//index deve ser apenas para execução

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//Criando novo cliente(objeto) a partir do molde(classe)
const cliente1 = new Cliente(); // instancia da classe cliente, usando o new

//Add info aos atributos de cliente
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); // instancia da classe cliente
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contCorrenteRicardo = new ContaCorrente();
contCorrenteRicardo.agencia = 1001

contCorrenteRicardo.depositar(100)
const valorSacado = contCorrenteRicardo.sacar(50)

console.log(valorSacado);
console.log(contCorrenteRicardo);
