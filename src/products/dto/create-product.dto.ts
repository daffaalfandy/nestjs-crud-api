import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    readonly id: string;
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}