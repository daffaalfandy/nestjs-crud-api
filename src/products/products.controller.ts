import { Controller, Get, Req, Res, Query, Post, Put, Delete, HttpCode, Header, Redirect, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Get()
    findAll(
        @Req()
        request: Request,
        @Res()
        response: Response,
        @Query() query,
    ): any {
        console.log(request);
        return response.json({ msg: 'Find all' });
    }

    @Post()
    create(@Body() product: CreateProductDTO): any {
        return this.productService.create(product);
    }

    @Put()
    update(): any {
        return 'UPDATE PRODUCT';
    }

    @Delete()
    delete(): any {
        return 'DELETE ENDPOINT';
    }

    @Get(':id')
    findOne(@Param() params): any {
        return params;
    }
}
