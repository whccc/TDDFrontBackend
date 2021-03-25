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
      console.log(DataUser);
      const UserMD = new ClsUserModel();
      await UserMD.createUser(DataUser);

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  @Query(() => [Boolean])
  async getUsers() {
    try {
      const UserMD = new ClsUserModel();
      const Data = await UserMD.getUser();
      return Data;
    } catch (e) {
      throw new Error(e);
    }
  }

  @Query(() => Boolean)
  async ValidateUserLogin(@Arg('DataUser', () => UserInput) DataUser: UserInput) {
    try {
      const UserMD = new ClsUserModel();
      const Data = await UserMD.ValidateLoginUser(DataUser);
      return Data.length !== 0;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
}

export default UserResolver;
