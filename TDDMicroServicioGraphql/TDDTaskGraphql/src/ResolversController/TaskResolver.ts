import { Resolver, Mutation, Query, Arg } from 'type-graphql';
// import TaskEntity from '../Entity/TaskEntity';
import TaskInput from '../InputType/TaskInput';
import TaskModel from '../Model/TaskModel';

@Resolver()
class TaskResolver {
  // Create Task
  @Mutation(() => Boolean)
  async createTask(@Arg('DataTask', () => TaskInput) DataTask: TaskInput) {
    try {
      const MDTask = new TaskModel();
      MDTask.createTask(DataTask);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  @Query(() => Boolean)
  async getTask() {
    return true;
  }
}

export default TaskResolver;
