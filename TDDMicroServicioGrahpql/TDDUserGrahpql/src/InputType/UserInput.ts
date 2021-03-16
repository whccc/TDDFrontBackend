import { InputType, Field } from 'type-graphql';

@InputType()
class clsUserInput {
  @Field()
  strfullname!: string;

  @Field()
  struser!: string;

  @Field()
  strpassword!: string;
}

export default clsUserInput;
