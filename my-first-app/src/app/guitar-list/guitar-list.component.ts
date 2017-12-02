import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {

  gultrDetails:any; 
  sortFlag = null;
  constructor(http: Http){
    http.get('../assets/data.json').subscribe(
      data => this.gultrDetails = data.json()
    );
  }

  ngOnInit() {
  }

}
