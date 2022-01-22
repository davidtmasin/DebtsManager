import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './views/home/home.component'
import { DebtsCrudComponent } from './views/debts-crud/debts-crud.component'
import { DebtCreateComponent } from './components/debt/debt-create/debt-create.component'
import { CreditsCrudComponent } from './views/credits-crud/credits-crud.component'
import { CreditCreateComponent } from './components/credit/credit-create/credit-create.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'debts',
    component: DebtsCrudComponent
  },
  {
    path: 'debts/create',
    component: DebtCreateComponent
  },
  {
    path: 'credits',
    component: CreditsCrudComponent
  },
  {
    path: 'credits/create',
    component: CreditCreateComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
