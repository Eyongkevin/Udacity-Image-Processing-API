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
