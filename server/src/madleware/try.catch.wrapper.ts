import { Response, Request, NextFunction } from "express";

export const tryCatchWrapper = (cb: any) => {
  return (req: Request, res: Response, next: NextFunction) => cb(req, res, next).catch(next);
};