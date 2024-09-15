import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Kexin's Shop";
  mainImage = "../assets/images/porsche.jpeg";
  carData = {
      name: "Ryan's Auto Shop",
      address: "2 Lower Jarvis Ave.",
      city: "Toronto",
      cars: [
        {
          make: "Porsche",
          model: "911",
          color: "Black",
          price: 240000,
          quantity: 19,
          url : "../assets/images/porsche-black.jpeg"
        },
        {
          make: "Audi",
          model: "Q7",
          color: "Blue",
          price: 89000,
          quantity: 3,
          url: "../assets/images/audi.jpeg"
        },
        {
          make: "Mazda",
          model: "C9",
          color: "Red",
          price: 52600,
          quantity: 7,
          url: "../assets/images/mazda.jpeg"
        },
        {
          make: "Honda",
          model: "Accord",
          color: "Green",
          price: 29000,
          quantity: 4,
          url: "../assets/images/honda.webp"
        }
      ]

  }

  changeParentImage(imagePath:string):void{
      this.mainImage = imagePath;

  }

  changeTopParentImage(indexFromCard:number):void {
    this.mainImage = this.carData.cars[indexFromCard].url;
  }

  addCarToCarData(carItem:any):void{

    this.carData.cars.push(carItem);

  }
}
