import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {

  guitarVariable:any;
  whichGuitar:number;

  constructor(private http: Http,private route:ActivatedRoute) {
    http.get('../assets/data.json').subscribe(
      data => {
        this.guitarVariable = data.json()[this.route.snapshot.params['id']].image
        this.whichGuitar = 120;
      }
    );
   }
  //  
  ngOnInit() {    
  }

}
