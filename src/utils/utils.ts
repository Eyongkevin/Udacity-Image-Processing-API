import path from 'path';

interface imageDirs {
  inputPath: string;
  outputPath: string;
}
export const imagesPath = (dirname: string): imageDirs => {
  const pathList = dirname.split(path.sep);
  pathList.pop();
  return {
    inputPath: path.join(pathList.join(path.sep), 'public', 'images', 'full'),
    outputPath: path.join(
      pathList.join(path.sep),
      'public',
      'images',
      'thumbnails'
    )
  };
};

export const clearnFiles = (files: string[]): string[] => {
  const newFiles: string[] = [];

  files.forEach((file) => {
    if (!file.startsWith('.')) {
      newFiles.push(file);
    }
  });
  return newFiles;
};

export const createThumbnailName = (
  file: string,
  width: number | null,
  height: number | null
): string => {
  const [filename, ext] = file.split('.');
  return `${filename}_${width}_${height}.${ext}`;
};
