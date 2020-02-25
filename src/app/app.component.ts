import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 a="this my project";
 title="this is angular class";
 sampletext="<a href='#'>This is property binding</a>"
 myFun(){
   alert("hi how r u");
 }
}
