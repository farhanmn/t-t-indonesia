import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {  } from 'ionic-angular';

/**
 * Generated class for the DataCalonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-calon',
  templateUrl: 'data-calon.html',
})
export class DataCalonPage {

  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Jawa',
      'Batak',
      'Madura'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}