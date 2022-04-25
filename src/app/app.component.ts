import { Component, VERSION,OnInit } from '@angular/core';
import {MyserviceService} from './myservice.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[MyserviceService]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  text:string;
  constructor(private _myservice: MyserviceService){}

    ngOnInit(){
          this.text= this._myservice.display();
    }
  }
