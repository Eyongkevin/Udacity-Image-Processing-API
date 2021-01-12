import express, { Application } from 'express';
import path from 'path';
import { routes } from './routes';
import { morganMiddleware } from './middleware/logger';
import { pageNotFound404 } from './middleware/pageNotFound404.middleware';

// Get expess
export const app: Application = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// logger middleware
app.use(morganMiddleware);

// Routing
routes(app);

// page not found middleware
app.use(pageNotFound404);
