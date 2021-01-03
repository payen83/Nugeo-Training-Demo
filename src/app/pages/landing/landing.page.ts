import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
const { Storage } = Plugins;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  eventSource: Array<any>;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  constructor(private navController: NavController) { 
    this.eventSource = [
      
    ];
  }

  ngOnInit() {
    this.eventSource = [
      {
        title: 'Kenduri Ahmad',
        desc: 'Majlis Perkahwinan',
        startTime: new Date("2020-12-25"),
        endTime: new Date("2020-12-25"),
        allDay: false
      },
      {
        title: 'Birthday Jue',
        desc: 'Majlis Harijadi',
        startTime: new Date("2020-12-01"),
        endTime: new Date("2020-12-03"),
        allDay: false
      }
    ]
  }

  onEventSelected(event: any){

  }

  onViewTitleChanged(event: any){

  }

  onTimeSelected(event: any){

  }

  async logout() {
    await Storage.clear();
    this.navController.navigateRoot('login');
  }

}
