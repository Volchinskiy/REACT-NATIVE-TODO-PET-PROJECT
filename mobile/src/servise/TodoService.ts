import HttpSerivce from './Http.service';
import axios, { Axios } from 'axios';

class TodoServices extends HttpSerivce {
  todoUrl: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.todoUrl = 'todos';
    this.fetchingService = axios;
  };

  async getAllToDos() {
    const data = await this.get(this.todoUrl);
    return data.data;
  }
  async deletTodo(id: any) {
    await this.delete(`${this.todoUrl}/${id}`);
  }
  async createToDo(data: object) {
    const res = await this.post(this.todoUrl, data);
    return res;
  }
  async editTodo(data: object, id: string) {
    const patchedToDo = await this.put(`${this.todoUrl}/${id}`, data);
    return patchedToDo;
  }
}

const todoService = new TodoServices();
export default todoService;
