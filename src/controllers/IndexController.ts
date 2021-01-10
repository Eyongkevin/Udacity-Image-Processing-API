import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';

import resize from '../modules/transformImage';
import { imagesPath } from '../utils/utils';

export const IndexController: Router = Router();
const getImagePath = imagesPath(__dirname);

IndexController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { h, w, f } = req.query;
      const imagePath = path.join(getImagePath, 'fjord.jpg');

      const width: number = w ? parseInt(w as string, 10) : 0;
      const height: number = h ? parseInt(h as string) : 0;
      const format: string = f ? (f as string) : 'jpeg';

      res.type(format);

      console.log(width, height);
      console.log(getImagePath);

      resize(imagePath, format, width, height).pipe(res);
    } catch (e) {
      next(e);
    }
  }
);
