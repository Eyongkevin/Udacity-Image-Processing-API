import { Application, Router } from 'express';
import { IndexController } from './controllers/IndexController';
import { ResizeController } from './controllers/ResizeController';

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/', ResizeController]
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
