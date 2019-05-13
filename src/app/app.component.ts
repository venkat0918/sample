import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngular';
  promise;
  constructor(){
    this.doAsyncTask1().then(res => {
      console.log('--------------', res)
    })
    this.doAsyncTask(() => console.log("Callback Called"));
  }

   doAsyncTask(cb) {
    setTimeout(() => {
      console.log("Async Task Calling Callback");
      cb();
    }, 1000);
  }

 doAsyncTask1() {
    this.promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
      
          resolve('erwre');
       
      }, 5000);
    });
    return this.promise;
  }
  



}
