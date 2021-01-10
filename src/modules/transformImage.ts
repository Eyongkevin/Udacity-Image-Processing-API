import sharp from 'sharp';
import fs from 'fs';

export default function resize(
  inputPath: string,
  outputPath: string,
  format: string,
  width: number,
  height: number
) {
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);

  writeStream.on('error', () => console.log('Error'));
  writeStream.on('close', () => console.log('Successfully saved'));

  let transform = sharp();

  if (format === 'jpeg' || format === 'png') {
    transform = transform.toFormat(format);
  }

  if (width || height) {
    transform = transform
      .resize(width, height)
      .on('info', (fileInfo) => console.log('Successfully resized'));
  }

  return readStream.pipe(transform).pipe(writeStream);
}
