import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  dellAvailable() {
    return false;
  }

  hpAvailable() {
    return false;
  }

  dell = {
    brand: 'Dell',
    hardDisk: '1 TB',
    color: 'Silver',
  };

  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Black',
  };

  nA = {
    brand: 'Not Available',
    status: 'Failed',
  };

  ngOnInit(): void {
    // let buyLaptop =  new Promise (function (resolve, reject){
    //   resolve('promise is resolved');
    // })

    // using arrow function
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise is resolved');
      // reject('promise is reject');

      // if this.dellAvailable is true then it is resolved and returns Dell is purchased
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          reject(this.nA);
        }, 3000);
      }
    });
    // res will consist resolve function
    buyLaptop
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }
}
