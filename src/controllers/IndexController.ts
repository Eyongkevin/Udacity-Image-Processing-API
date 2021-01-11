import { Router, Request, Response, NextFunction } from 'express';
// import path from 'path';
import fs from 'fs';

// import resize from '../modules/transformImage';
import { imagesPath } from '../utils/utils';

export const IndexController: Router = Router();
const { inputPath, outputPath } = imagesPath(__dirname);

IndexController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {
      message: 'Index'
    });
  }
);
