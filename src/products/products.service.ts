import { Injectable } from '@nestjs/common';
import { Product } from './dto/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = [];
    // Database logic
    create(product: Product) {
        this.products.push(product);
        return this.products;
    }
}
