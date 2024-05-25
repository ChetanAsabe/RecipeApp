import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  API_KEY: string = 'a64c9cbb86234cc3b08d0ed9dd08faae';

  SearchQuery: string = ' ';

  httpClient = inject(HttpClient);
  data: any = [];

  brandName: string = 'RecipeLib';

  // @Output() recipeData = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    // this.recipeData.emit(this.data);
  }

  inputFromSearch(event: any) {
    this.SearchQuery = event.target.value;
    console.log(this.SearchQuery);
  }

  fetchData() {
    this.httpClient
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${this.SearchQuery}&number=5&apiKey=${this.API_KEY}`
      )
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}
