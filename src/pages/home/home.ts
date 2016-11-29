import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:string;
  constructor(public navCtrl: NavController, private auth:Auth) {
    this.auth.private().subscribe(data => {
      this.data = data.message
    });
  }

  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
