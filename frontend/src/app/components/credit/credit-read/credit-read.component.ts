import { Component, OnInit } from '@angular/core';
import { Credit } from '../credit.model';
import { CreditService } from '../credit.service';

@Component({
  selector: 'app-credit-read',
  templateUrl: './credit-read.component.html',
  styleUrls: ['./credit-read.component.css']
})
export class CreditReadComponent implements OnInit {

  credits!: Credit[]

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.creditService.read().subscribe(credits => {
      this.credits = credits
      console.log(this.credits)
    })
  }

}
