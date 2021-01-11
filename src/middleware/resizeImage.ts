import { Request, Response, NextFunction } from 'express';
// import fs from 'fs';
import path from 'path';
import { imagesPath, createThumbnailName } from '../utils/utils';
import resize from '../modules/transformImage';

const { inputPath, outputPath } = imagesPath(__dirname);

export const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.noParams && res.locals.isInputImage) {
    console.log('Nothing to resize');
    next();
  } else if (res.locals.noParams && !res.locals.isInputImage) {
    console.log('Error, no images to display');
    next();
  } else if (res.locals.unResized?.length > 0) {
    console.log('Images need to be resized');
    try {
      const { h, w, f } = req.query;
      const width: number | null = w ? parseInt(w as string, 10) : null;
      const height: number | null = h ? parseInt(h as string, 10) : null;
      const format: string = f ? (f as string) : 'jpeg';

      res.type(format);

      console.log(width, height);
      console.log(res.locals.resizeStatus);
      console.log(res.locals.unResized);
      console.log(req.query);

      for (const file of res.locals.unResized) {
        const inputImage: string = path.join(inputPath, file);
        const thumbnailFile: string = createThumbnailName(file, width, height);
        const thumbnailFilePath: string = path.join(outputPath, thumbnailFile);

        await resize(inputImage, thumbnailFilePath, format, width, height);
      }
      // wait 3 seconds
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
      next();
    } catch (e) {
      next(e);
    }
  } else {
    console.log('All images have been resized');
    next();
  }
};
