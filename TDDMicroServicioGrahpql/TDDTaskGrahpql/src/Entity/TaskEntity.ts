import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class ClsTaskEntity {
  @Field()
  intid?: number;

  @Field()
  strtask?: String;

  @Field()
  intiduser?: String;
}

export default ClsTaskEntity;
