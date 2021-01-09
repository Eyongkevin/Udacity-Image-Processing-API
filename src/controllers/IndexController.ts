import { Router, Request, Response, NextFunction } from 'express';

export const IndexController: Router = Router();

IndexController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send({ data: 'Udacity Image Processing API' });
    } catch (e) {
      next(e);
    }
  }
);
