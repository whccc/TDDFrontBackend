import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import UserEntity from '../Entity/UserEntity';
import UserInput from '../InputType/UserType';

@Resolver()
class UserResolver {
  @Mutation(() => UserEntity)
  async createUser(@Arg('DataUser', () => UserInput) DataUser: UserInput) {
    const User = await UserEntity.create(DataUser).save();
    return User;
  }

  @Query(() => [UserEntity])
  async getUsers() {
    return UserEntity.find();
  }
}

export default UserResolver;
