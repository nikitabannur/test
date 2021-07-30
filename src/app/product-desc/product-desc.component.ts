import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent {
  @Input() name: string | undefined;

  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<
    MouseEvent
  >();
}
