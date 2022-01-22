import { Debt } from './debt.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  baseUrl = 'http://localhost:3001/debts';


  constructor(private snackBar : MatSnackBar,
              private http: HttpClient) { }
  
  showMessage(msg: string) : void {
      this.snackBar.open(msg, '❌', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['my-snackbar']
      })
    }

  create(debt: Debt): Observable<Debt>{
    return this.http.post<Debt>(this.baseUrl, debt);
  }

  read(): Observable<Debt[]> {
    return this.http.get<Debt[]>(this.baseUrl);
  }

}
