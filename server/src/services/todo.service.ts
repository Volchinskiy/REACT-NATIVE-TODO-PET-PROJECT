import TodoPost from "../models/todo.post";
import { ITodoPost } from "../types/todos.type";

export default class TodoService {
  async getAllTodoPost() {
    const todoPosts = await TodoPost.find();
    return todoPosts;
  }
  async addTodoPost(data: ITodoPost) {
    const newTodoPost = new TodoPost(data);
    await newTodoPost.save();
    return newTodoPost;
  }
  async changeTodoPost(id: string, data: ITodoPost) {
    const changeTodoPost = await TodoPost.findByIdAndUpdate(id, data, { new: true });
    return changeTodoPost;
  }
  async deleteTodoPost(id: string) {
    await TodoPost.findByIdAndRemove(id);
  }
}