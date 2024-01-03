import { Component, NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css'],


 //styles:['h1{background-color:pink}']      Inline CSS but not recomended 

 //preserveWhitespaces:true

})
export class TestcompComponent {
  
 Students:any[]=[
  {
    'name': 'Virat Kohli'
  },
  {
    'name':'Rohit Sharma'
  }

 ];

  name="Virat";

  isvalid:boolean=true;
  changevalue(valid:any){
    this.isvalid=valid;
  }


}
