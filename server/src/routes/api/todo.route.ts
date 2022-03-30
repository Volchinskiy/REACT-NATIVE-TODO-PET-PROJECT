import { Router, Response, Request, NextFunction } from "express";
import todoController from "../../controllers/todo.controller";
import { todoValidation } from "../../validation/validation";
import { tryCatchWrapper } from "../../madleware/try.catch.wrapper";
const todosRouter: Router = Router();

todosRouter.get("", todoController.getAllTodoPost.bind(todoController), tryCatchWrapper);
todosRouter.post("", todoValidation, todoController.addTodoPost.bind(todoController), tryCatchWrapper);
todosRouter.put("/:id", todoValidation, todoController.changeTodoPost.bind(todoController), tryCatchWrapper);
todosRouter.delete("/:id", todoController.deleteTodoPost.bind(todoController), tryCatchWrapper);
todosRouter.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

export default todosRouter;
