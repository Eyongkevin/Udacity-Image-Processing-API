import express, { Application } from 'express';
import { routes } from './routes';

// Get expess
export const app: Application = express();

// Routing
routes(app);
