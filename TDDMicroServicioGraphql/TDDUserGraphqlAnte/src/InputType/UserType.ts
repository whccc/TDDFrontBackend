import { Field, InputType } from 'type-graphql';

@InputType()
class UserInput {
  @Field()
  strFullName!: string;

  @Field()
  strUser!: string;

  @Field()
  strPassword!: string;
}

export default UserInput;
