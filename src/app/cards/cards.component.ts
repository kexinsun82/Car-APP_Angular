import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
@Input() carInfo:any[] = [];
@Output() changeImage = new EventEmitter<number>();


changeTopImage(indx:number):void {
  this.changeImage.emit(indx);
  console.log(indx);
}
}
