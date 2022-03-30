import { Response, Request } from "express";
import TodoService from "../services/todo.service";

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllTodoPost(_: Request, res: Response) {
    const todoPosts = await this.todoService.getAllTodoPost();
    res.status(200).json(todoPosts);
  }
  async addTodoPost(req: Request, res: Response) {
    const body = req.body;
    const newTodoPost = await this.todoService.addTodoPost(body);
    res.status(200).json(newTodoPost) ;
  }
  async changeTodoPost(req: Request, res: Response) {
    const { id: _id } = req.params;
    const body = req.body;
    const changeTodoPost = await this.todoService.changeTodoPost(_id, body);
    res.status(200).json(changeTodoPost);
  }
  async deleteTodoPost(req: Request, res: Response) {
    const { id: _id } = req.params;
    await this.todoService.deleteTodoPost(_id);
    res.status(200).json("Deleted");
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;