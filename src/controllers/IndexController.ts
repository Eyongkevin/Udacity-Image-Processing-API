import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';

import resize from '../modules/transformImage';
import { imagesPath } from '../utils/utils';

export const IndexController: Router = Router();
const { inputPath, outputPath } = imagesPath(__dirname);

IndexController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { h, w, f } = req.query;
      const width: number = w ? parseInt(w as string, 10) : 0;
      const height: number = h ? parseInt(h as string, 10) : 0;
      const format: string = f ? (f as string) : 'jpeg';

      const inputImage = path.join(inputPath, 'fjord.jpg');
      const outputImage = path.join(outputPath, `fjord_${width}_${height}.jpg`);

      res.type(format);

      console.log(width, height);

      resize(inputImage, outputImage, format, width, height);
    } catch (e) {
      next(e);
    }
  }
);
