import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  Name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  Age: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  Education: string;
}

@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  Name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  Age: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  Education: string;
}
