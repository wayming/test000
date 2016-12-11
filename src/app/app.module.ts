import { NgModule }             from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { HttpModule }           from '@angular/http';
import { ReactiveFormsModule }  from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }         from "./components/app.component";
import { RestService }          from "./services/rest.service";
import { SVGDataService }       from "./services/svg.data.service";
import { SVGMockDBService }     from "./services/in.memory.service";

@NgModule({
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  imports: [
      BrowserModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(SVGMockDBService),
      ReactiveFormsModule
  ],
  providers: [ SVGDataService, RestService ]
})

export class AppModule { }
