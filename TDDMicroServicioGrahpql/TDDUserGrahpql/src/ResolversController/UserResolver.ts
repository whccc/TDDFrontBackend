import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import UserEntity from '../Entity/UserEntity';
import UserInput from '../InputType/UserInput';
import ClsUserModel from '../Model/UserModel';

@Resolver()
class UserResolver {
  @Mutation(() => Boolean)
  async createUser(@Arg('DataUser', () => UserInput) DataUser: UserInput) {
    // Create user
    try {
      const UserMD = new ClsUserModel();
      await UserMD.createUser(DataUser);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  @Query(() => [UserEntity])
  async getUsers() {
    try {
      const UserMD = new ClsUserModel();
      const Data = await UserMD.getUser();
      return Data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default UserResolver;
