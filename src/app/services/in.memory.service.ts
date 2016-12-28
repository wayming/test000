import { InMemoryDbService } from 'angular-in-memory-web-api';
import { fish } from './test_data/fish.svg';

export class SVGMockDBService implements InMemoryDbService {
    createDb() {
        const svgs = [
            {
                id: 1,
                name: "mysvg1",
                data: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`
            }
        ];

        return {svgs};
    }
}