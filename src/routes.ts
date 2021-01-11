import { Application, Router } from 'express';
import { IndexController } from './controllers/IndexController';
import { ParamController } from './controllers/ParamsController';

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/', ParamController]
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
