import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  @Input() getRecipeData !: any;

  @Input() sQuery !: string;

  constructor() { }

  ngOnInit(): void {
  }

  // getRecipeData(data : any) {
  //   console.log('Got data from search comp',data);
  // }

}
