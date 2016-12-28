import { Component } from "@angular/core";
import { RestService } from "../services/rest.service";
import { SVGDataService } from "../services/svg.data.service";
import { SVG } from "../models";

@Component({
  selector: "my-app",
  template: require('./app.html')
})
export class AppComponent { 
  svgs: SVG[] = null;
  selectedSVG: SVG = null;
  
  constructor(private svgData: SVGDataService, private rest: RestService ) {
    rest.getAllSVGs().subscribe((svgs: SVG[]) => {
      this.svgData.setSVGs(svgs)
      this.svgs = this.svgData.getAllSVGs();
    });
  }

  selectByID(svgID: number) {
    this.selectedSVG = this.svgData.getSVG(svgID);
  }
}

