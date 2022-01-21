import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debts-crud',
  templateUrl: './debts-crud.component.html',
  styleUrls: ['./debts-crud.component.css']
})
export class DebtsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDebtCreate(): void {
    this.router.navigate(['/debts/create']);
  }
  
}
