import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductInterface } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductInterface>,
  ) { }

  create(createProductDto: CreateProductDto) {
    return new this.productModel(createProductDto).save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById({ _id: id });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    this.productModel.findByIdAndUpdate({ _id: id, updateProductDto });
    return 'Product updated successfully...!';
  }

  remove(id: string) {
    this.productModel.findByIdAndRemove({ _id: id });
    return 'Product removed Successfully...!';
  }
}
