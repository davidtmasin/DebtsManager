import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Debt } from '../debt.model'
import { DebtService } from '../debt.service'

@Component({
  selector: 'app-debt-create',
  templateUrl: './debt-create.component.html',
  styleUrls: ['./debt-create.component.css']
})
export class DebtCreateComponent implements OnInit {
  debt: Debt = {
    id: 0,
    name: '',
    price: 0,
    numberOfParc: 0
  }

  constructor(private debtService: DebtService, private router: Router) {}

  ngOnInit(): void {}

  createDebt(): void {
    this.debtService.create(this.debt).subscribe(() => {
      this.debtService.showMessage('Débito registrado com sucesso!')
      this.router.navigate(['/debts'])
    })
  }

  cancel(): void {
    this.router.navigate(['/debts'])
  }
}
