import { Credit } from './credit.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  baseUrl = 'http://localhost:3001/credits'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, '❌', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['my-snackbar']
    })
  }

  create(credit: Credit): Observable<Credit> {
    return this.http.post<Credit>(this.baseUrl, credit)
  }
}
