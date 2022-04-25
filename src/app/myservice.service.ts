import { Injectable } from '@angular/core';

@Injectable(
  
  )
export class MyserviceService {
  employee:any[];
  constructor() { 
    this.employee=[
      {empcode:'001', name:'ali',age:22},
      {empcode:'002', name:'raja',age:33}
    ]
  }
  display(){
    return 'pakistan zindabad';
  }

}