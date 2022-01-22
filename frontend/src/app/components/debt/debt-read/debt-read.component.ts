import { Debt } from './../debt.model'
import { Component, OnInit } from '@angular/core'
import { DebtService } from '../debt.service'

@Component({
  selector: 'app-debt-read',
  templateUrl: './debt-read.component.html',
  styleUrls: ['./debt-read.component.css']
})
export class DebtReadComponent implements OnInit {
  debts!: Debt[] //O uso do ! é para não obrigar a implementação de um valor

  constructor(private debtService: DebtService) {}

  ngOnInit(): void {
    this.debtService.read().subscribe(debts => {
      this.debts = debts
      console.log(this.debts)
    })
  }
}
