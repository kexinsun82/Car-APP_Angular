import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input('dealershipName') dName:string = '';
  @Output() changeMainImage = new EventEmitter<string>();

  changeImage():void {
    let path:string = "https://cdn.ferrari.com/cms/network/media/img/resize/5d26fdb7c3f9ec0af6475619-01_fb_ppl_intro_lp3lhwq8?width=1080";
    console.log("Chnage Image");
    this.changeMainImage.emit(path);
  }
}
