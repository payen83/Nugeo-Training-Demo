import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any;

  constructor(public apiService: ApiService, public navController: NavController) { 
    this.user = { username: null, password: null };
  }

  ngOnInit() {
    console.log(this.user);
  }

  async doLogin(){
    console.log(this.user);
    try {
      let response: any = await this.apiService.login(this.user);
      console.log(response); 

      //call setObject to save storage
      await this.setObject(response);

      //navigate to landing page
      this.navController.navigateRoot('landing');
    } catch(error) {
      console.log('error Message: ', error);
    }
  }

  async setObject(data: any) {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(data)
    });
  }


}
