import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    products = [];
    // Database logic
    create(product): any {
        this.products.push(product);
        return this.products;
    }
}
