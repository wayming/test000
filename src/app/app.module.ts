import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }   from "components/app.component";

@NgModule({
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  imports: [
      BrowserModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(FauxFormsService),
      ReactiveFormsModule
  ],
  providers: [ FormService, RestService ]
})

export class AppModule { }
