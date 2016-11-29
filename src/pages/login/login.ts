import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Auth } from '../../providers/auth';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private auth: Auth,
    public alertCrtl: AlertController
  ) {}

  login(FormLogin){
    this.auth.login(FormLogin.value).subscribe(data => {
      if(data.succes === true){
        this.navCtrl.setRoot(HomePage);
      }else{
        FormLogin.password = '';
        let alert = this.alertCrtl.create({
          title: 'Login Failed',
          subTitle: data.message,
          buttons: ['OK']
        })
        alert.present();
      }
    })
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
