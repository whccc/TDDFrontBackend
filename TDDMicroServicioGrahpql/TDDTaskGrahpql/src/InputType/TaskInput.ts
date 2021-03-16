import { Field, InputType } from 'type-graphql';

@InputType()
class ClsTaskInput {
  @Field()
  strtask!: string;

  @Field()
  intiduser!: number;
}

export default ClsTaskInput;
