import { Application } from "express";
import todoRoute from "./api/todo.route";

class AppRouter {
  constructor(private app: Application) {}
  init() {
    this.app.get("/", (_req, res) => {
      res.send("API Running");
    });
    this.app.use("/api/todos", todoRoute);
  }
}

export default AppRouter;