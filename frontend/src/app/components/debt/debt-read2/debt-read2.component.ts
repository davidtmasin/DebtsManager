import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTable } from '@angular/material/table'
import { Debt } from '../debt.model'
import { DebtRead2DataSource } from './debt-read2-datasource'

@Component({
  selector: 'app-debt-read2',
  templateUrl: './debt-read2.component.html',
  styleUrls: ['./debt-read2.component.css']
})
export class DebtRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatTable) table!: MatTable<Debt>
  dataSource: DebtRead2DataSource

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name']

  constructor() {
    this.dataSource = new DebtRead2DataSource()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.table.dataSource = this.dataSource
  }
}
