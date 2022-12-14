import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'Example field (placeholder)' })
  Name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  Age: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  Education: string;
}
