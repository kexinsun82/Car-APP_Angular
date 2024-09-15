import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrl: './cars-table.component.scss',
  providers: [CurrencyPipe]
})



export class CarsTableComponent implements OnInit {



  @Input() carInfo:any[] = [];

   constructor(private currencyPipe:CurrencyPipe){
    
  }

  ngOnInit(){
      console.log(this.carInfo);
  }

  getSubTotal(price:number,quantity:number): any{
    let subTotal = 0;
    subTotal = price * quantity;
    // returning currency pipe through component
    return this.currencyPipe.transform(subTotal);
  }

  calculateSubTotal():number{
    let total =0;
    this.carInfo.forEach(item => {
     total = total + (item.price * item.quantity)
    });
    return total;

  }

  calculateTax():number{
    let taxAmount = 0;
    taxAmount =  this.calculateSubTotal() * .13;
    return taxAmount;
    }

  }