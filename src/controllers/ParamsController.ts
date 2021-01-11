import { Router, Request, Response, NextFunction } from 'express';
// import path from 'path';
import fs from 'fs';

// import resize from '../modules/transformImage';
import { imagesPath } from '../utils/utils';

export const ParamController: Router = Router();
const { outputPath } = imagesPath(__dirname);

ParamController.get(
  '/resize',
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('display all sized images of that width and height');
    const { h, w } = req.query;
    const width: number | null = w ? parseInt(w as string, 10) : null;
    const height: number | null = h ? parseInt(h as string, 10) : null;

    const subStringToTarget: string = `_${width}_${height}`;
    const outputFiles: string[] = fs.readdirSync(outputPath);

    const finalOutputFiles: string[] = outputFiles.filter((file) =>
      file.includes(subStringToTarget)
    );
    res.render('index', {
      message: finalOutputFiles
    });
  }
);
