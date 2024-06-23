import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /* public traicay = ['oi', 'cam', 'quit', 'buoi'];
  public traicay1 = [
    { name: 'oi', price: 4, angebot: true },
    { name: 'cam', price: 6, angebot: false },

    { name: 'quit', price: 14, angebot: true },];
  public age = 10;
  public name = 'phan thanh';
  public resetName(): void {
    console.log('resetName')
    this.name = ''
  } */
  public name = 'phan';
  public age = 10;
  public hagia = true
  public resetAge(): void {
    /* console.log('resetAge'); */
    this.name = '';
  };
  public traicay = [{ name: 'cam', price: 10, hagia: true }, { name: 'chanh', price: 2 }, { name: 'quit', price: 5, hagia: true }, { name: 'oi', price: 15 }, { name: 'mit', price: -35, hagia: true }] //['cam', 'quit', 'oi'];

  public districts: string[] = ['Quan/Huyen'];
  public vietnamData = [{ city: 'Tinh/Thanh pho', district: ['Quan/Huyen'] }, { city: 'An Giang', district: ["Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu", "Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn", "Huyện Tịnh Biên", "Huyện Tri Tôn"] },
  { city: 'Bà Rịa - Vũng Tàu', district: ["Thành phố Vũng Tàu", "Thị xã Bà Rịa", "Thị xã Phú Mỹ", "Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "Huyện Xuyên Mộc"] },
  { city: 'Bạc Liêu', district: ["Thành phố Bạc Liêu", "Huyện Đông Hải", "Huyện Giá Rai", "Huyện Hòa Bình", "Huyện Hồng Dân", "Huyện Phước Long", "Huyện Vĩnh Lợi"] }]

  public ngOnInit(): void {
    /*  console.log('Cities', this.vietnamData) */
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }
    /* console.log('event', city); */
    const search = this.vietnamData.filter(data => data.city === city)
    console.log('my search', search)
    //cach 1
    /* if (search && search.length > 0) {
      this.districts = search[0].district;

    } */
    //cach 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }

}
