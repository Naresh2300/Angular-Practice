import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  isvalid:boolean=true;    //variable
 
  changevalue(valid: boolean){
    this.isvalid=valid;
  }

}
