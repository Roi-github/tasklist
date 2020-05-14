import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
title: string='task登録'
tasks:{name: string}[]=[
  {name:'task1'},
   {name:'task2'},
];
  constructor(public navCtrl: NavController) {

  }

}
