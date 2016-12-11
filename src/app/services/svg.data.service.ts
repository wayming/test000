import { Injectable } from '@angular/core';
import { SVG } from '../models';

@Injectable()
export class SVGDataService {
    private svgs: Array<SVG> = [];

    setSVGs(newSVGs: Array<SVG>) {
        this.svgs = newSVGs;
    }

    getAllSVGs() {
        return this.svgs;
    }

    getSVG(id: number): SVG {
        let svg = this.svgs.find((svg) => svg.id === id);

        if (!svg) {
            svg = null;
        }

        return svg;
    }
}