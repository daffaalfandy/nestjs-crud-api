import { Controller, Get, Req, Res, Query, Post, Put, Delete, HttpCode, Header, Redirect, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './dto/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Post()
    async create(@Body() product: CreateProductDTO): Promise<Product[]> {
        return this.productService.create(product);
    }

    @Get()
    async find(@Param() params): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Product> {
        return this.productService.findOne(params.id);
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Product[]> {
        return this.productService.delete(params.id);
    }

}
