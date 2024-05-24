import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { RouterModule, Routes } from '@angular/router';

// const routes : Routes = [
//   {path : '', component : MainComponent},
//   {path: 'search', component : SearchComponent},
//   {path: 'display', component : DisplaydataComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainComponent,
    DisplaydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
