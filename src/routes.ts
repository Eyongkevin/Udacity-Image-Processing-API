import { Application, Router } from 'express';
import { IndexController } from './controllers/IndexController';
import { morganMiddleware } from './middleware/logger';

const _routes: [string, Router][] = [['/', IndexController]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(morganMiddleware);
    app.use(url, controller);
  });
};
