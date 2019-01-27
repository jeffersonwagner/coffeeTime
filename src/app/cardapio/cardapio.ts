import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'cardapio',
  templateUrl: 'cardapio.html'
})
export class CardapioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
}
