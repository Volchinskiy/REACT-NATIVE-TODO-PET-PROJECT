import { Response, Request, NextFunction } from "express";
import Joi from "joi";

export function todoValidation(req: Request, res: Response, next: NextFunction) {
  const TodoPostShema = Joi.object({
    tittle: Joi.string().min(5).required(),
    text: Joi.string().min(10).required(),
    public: Joi.boolean(),
    completed: Joi.boolean(),
  });
  const { error } = TodoPostShema.validate(req.body);
  if (error) {
    res.status(500).send(error.message);
  } else {
    return next();
  }
}
