import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';

import {
  imagesPath,
  createThumbnailName,
  imageDirsTypes
} from '../utils/utils';
import { checkIfImagesExist } from '../modules/checkImages';
import { finalImages } from '../modules/getFinalImages';
import resize from '../modules/transformImage';

interface resizedTypes {
  unResized: string[];
}

export const ResizeController: Router = Router();

ResizeController.get(
  '/resize',
  async (req: Request, res: Response, next: NextFunction) => {
    const { h, w } = req.query;
    const width: number | null = w ? parseInt(w as string, 10) : null;
    const height: number | null = h ? parseInt(h as string, 10) : null;

    const { inputPath, outputPath }: imageDirsTypes = imagesPath(__dirname);

    let noParams: boolean = false;
    let noImagesError: boolean = false;
    let finalOutputFiles: string[] = [];

    if (width === null && height === null) {
      noParams = true;
    } else {
      const { unResized }: resizedTypes = checkIfImagesExist(width, height);

      if (unResized.length > 0) {
        // resizing goes here
        try {
          const format: string = 'jpeg';

          for (const file of unResized) {
            const inputImage: string = path.join(inputPath, file);
            const thumbnailFile: string = createThumbnailName(
              file,
              width,
              height
            );
            const thumbnailFilePath: string = path.join(
              outputPath,
              thumbnailFile
            );

            await resize(inputImage, thumbnailFilePath, format, width, height);
          }
        } catch (e) {
          // error processing image goes here
          console.log('Error occured while processing image');
        }
      }

      finalOutputFiles = finalImages(width, height, outputPath);
      if (unResized.length < 1 && finalOutputFiles.length < 1) {
        noImagesError = true;
      }
    }
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('wait before rendering');
      }, 1000);
    });

    res.render('resize', {
      data: finalOutputFiles,
      noParams,
      noImagesError,
      width,
      height
    });
  }
);
