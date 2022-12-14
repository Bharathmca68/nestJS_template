import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductDto {
    @Field(() => String, { description: 'Example field (placeholder)' })
    Productname: string;

    @Field(() => String, { description: 'Example field (placeholder)' })
    description: string;
}
