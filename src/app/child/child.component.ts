import { Component,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  
  inputs:['Pdata']
})
export class ChildComponent {

  Pdata:any;

  

}
