import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    else{
      return new Promise(resolve => {
        this.http.get('https://randomuser.me/api/?results=10')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data.results;
            resolve(this.data);
          });
      });
    }
  }

}
