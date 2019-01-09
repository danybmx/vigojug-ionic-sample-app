import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import config from "../../config";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  loader: Loading;
  events: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: HttpClient) {
  }

  ionViewDidEnter() {
    if (!this.events) {
      this.fetch();
    }
  }

  fetch() {
    this.loader = this.loadingCtrl.create({
      content: 'Cargando eventos...'
    });
    this.loader.present();

    this.http.get(`${config.apiUrl}/meetup/events`)
      .finally(() => {
        this.loader.dismiss();
      })
      .subscribe((data: any[]) => {
        this.events = data;
      }, (err: any) => {
        console.error(err);
        this.events = null;
        this.alertCtrl.create({
          title: 'Error obteniendo eventos',
          subTitle: 'Ha ocurrido un problema al descargar la información de los eventos',
          message: 'Por favor, vuelve a intentarlo más tarde',
          buttons: [
            { text: 'Aceptar' }
          ]
        }).present();
      })
  }

}
