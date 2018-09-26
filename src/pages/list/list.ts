import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InicioService } from '../../servicios/index.services';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  descripcion: string = "";
  email: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ini: InicioService) {

  }
  ingresar(){
    this._ini.register(this.email,this.descripcion);
  }
}
