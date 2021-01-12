import { Router, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { imagesPath, clearnFiles, imageDirsTypes } from '../utils/utils';

export const IndexController: Router = Router();
const { inputPath }: imageDirsTypes = imagesPath(__dirname);

IndexController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    let inputFiles: string[] = fs.readdirSync(inputPath);
    inputFiles = clearnFiles(inputFiles);
    res.status(200);
    res.render('index', {
      data: inputFiles
    });
  }
);
