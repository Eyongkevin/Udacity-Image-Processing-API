import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { imagesPath, clearnFiles, createThumbnailName } from '../utils/utils';

const { inputPath, outputPath } = imagesPath(__dirname);

export const checkIfImagesExist = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { h, w } = req.query;
  const width: number | null = w ? parseInt(w as string, 10) : null;
  const height: number | null = h ? parseInt(h as string, 10) : null;

  const unResized: string[] = [];
  let outputFiles: string[] = [];
  let inputFiles: string[] = [];

  outputFiles = fs.readdirSync(outputPath);
  inputFiles = fs.readdirSync(inputPath);
  inputFiles = clearnFiles(inputFiles);

  console.log('input file ', inputFiles);

  if (width === null && height === null) {
    res.locals.noParams = true;
    res.locals.isInputImage = inputFiles.length > 0;
    next();
  } else {
    inputFiles.forEach((file) => {
      const thumbnailFile: string = createThumbnailName(file, width, height);

      if (!outputFiles.includes(thumbnailFile)) {
        unResized.push(file);
      }
    });
    res.locals.resizeStatus = 'passed';
    res.locals.unResized = unResized;
    next();
  }
};
