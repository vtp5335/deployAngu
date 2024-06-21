import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public traicay = ['oi', 'cam', 'quit', 'buoi'];
  public traicay1 = [
    { name: 'oi', price: 4, angebot: true },
    { name: 'cam', price: 6, angebot: false },

    { name: 'quit', price: 14, angebot: true },];
  public age = 10;
  public name = 'phan thanh';
  public resetName(): void {
    console.log('resetName')
    this.name = ''
  }
}
