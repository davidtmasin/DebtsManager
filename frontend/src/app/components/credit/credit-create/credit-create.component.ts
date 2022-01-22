import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Credit } from '../credit.model'
import { CreditService } from '../credit.service'

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  credit: Credit = {
    name: '',
    price: 0
  }

  constructor(private creditService: CreditService, private router: Router) {}

  ngOnInit(): void {}

  createCredit(): void {
    this.creditService.create(this.credit).subscribe(() => {
      this.creditService.showMessage('Crédito registrado com sucesso!')
      this.router.navigate(['/credits'])
    })
  }

  cancel(): void {
    this.router.navigate(['/credits'])
  }
}
