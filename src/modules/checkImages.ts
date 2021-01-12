import fs from 'fs';
import {
  imagesPath,
  clearnFiles,
  createThumbnailName,
  imageDirsTypes
} from '../utils/utils';

interface checkImageReturnTypes {
  unResized: string[];
  inputFiles: string[];
  outputFiles: string[];
}

export const checkIfImagesExist = (
  width: number | null,
  height: number | null
): checkImageReturnTypes => {
  const unResized: string[] = [];
  const { inputPath, outputPath }: imageDirsTypes = imagesPath(__dirname);
  const outputFiles: string[] = fs.readdirSync(outputPath);
  let inputFiles: string[] = fs.readdirSync(inputPath);

  inputFiles = clearnFiles(inputFiles);

  inputFiles.forEach((file) => {
    const thumbnailFile: string = createThumbnailName(file, width, height);

    if (!outputFiles.includes(thumbnailFile)) {
      unResized.push(file);
    }
  });
  return {
    unResized,
    inputFiles,
    outputFiles
  };
};
