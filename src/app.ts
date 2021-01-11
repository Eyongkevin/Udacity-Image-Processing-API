import express, { Application } from 'express';
import path from 'path';
import { routes } from './routes';
import { morganMiddleware } from './middleware/logger';
import { checkIfImagesExist } from './middleware/checkImages';
import { resizeImage } from './middleware/resizeImage';

// Get expess
export const app: Application = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
// logger
app.use(morganMiddleware);
app.use(checkIfImagesExist);
app.use(resizeImage);

// Routing
routes(app);
