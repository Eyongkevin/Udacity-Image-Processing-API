import fs from 'fs';

export const finalImages = (
  width: number | null,
  height: number | null,
  outputPath: string
): string[] => {
  const subStringToTarget: string = `_${width}_${height}`;
  const outputFiles: string[] = fs.readdirSync(outputPath);

  return outputFiles.filter(
    (file) =>
      subStringToTarget === file.substring(file.indexOf('_'), file.indexOf('.'))
  );
};
