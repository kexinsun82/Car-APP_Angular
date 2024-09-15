import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent {
carMake:string = '';
carModel:string = '';
carColor:string = '';
carPrice:number = 0;
carQuantity:number = 0;
carURL:string = '';

@Output() addNewCar = new EventEmitter<any>();

addCar():void{

  let carItem:any = {
    make: this.carMake,
    model: this.carModel,
    color: this.carColor,
    price: this.carPrice,
    quantity: this.carQuantity,
    url: this.carURL
  }

this.addNewCar.emit(carItem);

}

}
