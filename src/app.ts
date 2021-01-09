import express, { Application } from 'express';
import { routes } from './routes';
import { morganMiddleware } from './middleware/logger';

// Get expess
export const app: Application = express();

// logger
app.use(morganMiddleware);

// Routing
routes(app);
