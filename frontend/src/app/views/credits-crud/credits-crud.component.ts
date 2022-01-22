import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-credits-crud',
  templateUrl: './credits-crud.component.html',
  styleUrls: ['./credits-crud.component.css']
})
export class CreditsCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCreditCreate(): void {
    this.router.navigate(['credits/create'])
  }
}
