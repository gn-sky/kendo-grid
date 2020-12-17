import { Component } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { products } from '../products';
import { process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptory
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
  };

  public gridData: GridDataResult = process(products, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.gridData = process(products, this.state);
  } 
}
