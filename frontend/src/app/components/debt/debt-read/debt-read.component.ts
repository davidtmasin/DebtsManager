import { Debt } from './../debt.model'
import { Component, OnInit } from '@angular/core'
import { DebtService } from '../debt.service'

@Component({
  selector: 'app-debt-read',
  templateUrl: './debt-read.component.html',
  styleUrls: ['./debt-read.component.css']
})
export class DebtReadComponent implements OnInit {
  
  //O uso do ! é para não obrigar a implementação de um valor
  debts!: Debt[] 

  // O símbolo : define o tipo e o símbolo = define a atribuição
  displayedColumns = ['id', 'name', 'price', 'numberOfParc']

  constructor(private debtService: DebtService) {}

  ngOnInit(): void {
    this.debtService.read().subscribe(debts => {
      this.debts = debts
    })
  }
}
