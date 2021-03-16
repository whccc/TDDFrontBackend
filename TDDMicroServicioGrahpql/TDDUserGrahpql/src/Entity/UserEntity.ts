import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class clsUserEntity {
  @Field()
  intid?: number;

  @Field()
  strfullname?: String;

  @Field()
  struser?: String;

  @Field()
  strpassword?: String;
}

export default clsUserEntity;
