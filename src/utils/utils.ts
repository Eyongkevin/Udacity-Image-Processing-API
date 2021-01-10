import path from 'path';

export const imagesPath = (dirname: string) => {
  const pathList = dirname.split(path.sep);
  pathList.pop();
  return path.join(pathList.join(path.sep), 'public', 'images', 'full');
};
