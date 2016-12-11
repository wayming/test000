import { InMemoryDbService } from 'angular-in-memory-web-api';
import { fish } from './test_data/fish.svg';

export class SVGMockDBService implements InMemoryDbService {
    createDb() {
        const svgs = [
            {
                id: 1,
                name: "mysvg1",
                data: fish
            }
        ];

        return {svgs};
    }
}