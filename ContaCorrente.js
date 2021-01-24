import { Cliente } from "./Cliente.js";
import {Conta} from './Conta.js'

export class ContaCorrente extends Conta {
  static numeroDeContas = 0; //reglete as alterações em todos os objetos dessa classe
//chama construtor da classe pai
  constructor(cliente, agencia) {
    super(0, cliente, agencia) 
    ContaCorrente.numeroDeContas += 1
  }
}
