import { Component, OnInit } from '@angular/core';
import {BaseApiService } from '../../common/servies/http.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {

	gultrDetails:any; 
	sortFlag = false;
  sortingField:string;
  search:any;
  constructor(private baseService: BaseApiService, dragulaService:DragulaService) { 
  	baseService.get('../assets/data.json').subscribe(
      data => this.gultrDetails = data
    );

    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
  }


  ngOnInit() {
  }

  sortAscending(sortFlag){
    this.gultrDetails = this.sortJson(this.sortingField,sortFlag);
  }

  searchGuitar(){
    this.gultrDetails = this.filterGuitar(this.search);
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    debugger;
  }


  private sortJson(key:string,type:string) {
    if(type === 'asc'){
      return this.gultrDetails.sort((a, b) => b[key] < a[key]);
    }else{
      return this.gultrDetails.sort((a, b) => b[key] > a[key]);
    }
  }

  private filterGuitar(serachKey){
    console.log(serachKey);
  }

}
