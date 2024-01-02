import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';



class abc{
constructor(){
  console.log("Learning Angular")
}

Show(name:String){
    console.log("ABC Class");
}


}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation:ViewEncapsulation.ShadowDom,  //can use None and default is Emulated
  
  //in ShadowDom parent to child heirarchy is followed
  // and in None any CSS parent or Child can ber Applied to any One 
 
  viewProviders: [abc]
})
export class AppComponent {
  title = 'firstapp';

  // @HostListener('click',['$event'])
  //   Show(){
  //     alert("hii alert...");

  // }

  constructor(private obj:abc){
    obj.Show("Chetan");
  }



 



  

 
}
