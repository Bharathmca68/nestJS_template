import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
	@Field(() => String, { description: 'Example field (placeholder)' })
	Productname: string;

	@Field(() => String, { description: 'Example field (placeholder)' })
	description: string;
}
