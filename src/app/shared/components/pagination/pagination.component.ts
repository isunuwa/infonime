import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  inputs: ['alignment'],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() paginationAlignment: string | undefined;
}
