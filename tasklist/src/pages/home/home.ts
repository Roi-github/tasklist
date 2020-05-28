import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks:{name:string}[] =[
    {name: 'タスク１'},
    {name: 'タスク２'},
  ];
title: string='task登録'

task:string;
  constructor(public navCtrl: NavController) {

  }

ionViewWillEnter(){
 if(localStorage.getItem('tasks')){
   this.tasks = JSON.parse(localStorage.getItem('tasks'));
 }

}

  addTask() {
    this.tasks.push({
      name:this.task
    });
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
    this.task = '';
  }

}
