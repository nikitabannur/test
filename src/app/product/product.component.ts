
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  constructor() { }

  

  @Input() name: string | undefined;

@Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

}