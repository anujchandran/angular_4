import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 gultrDetails:any; 
 sortFlag = null;
 constructor(http: Http){
   http.get('../assets/data.json').subscribe(
     data => this.gultrDetails = data.json()
   );
 }
 sortAscending(){
   if(this.sortFlag){
    console.log(this.gultrDetails);
    this.gultrDetails.sort();
   }
 }
 

}
