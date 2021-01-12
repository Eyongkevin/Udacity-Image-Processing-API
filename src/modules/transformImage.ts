import sharp from 'sharp';
import fs from 'fs';

export default function resize(
  inputPath: string,
  outputPath: string,
  format: string,
  width: number | null,
  height: number | null
): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const readStream: fs.ReadStream = fs.createReadStream(inputPath);
      const writeStream: fs.WriteStream = fs.createWriteStream(outputPath);

      writeStream.on('error', () => console.log('Error'));
      writeStream.on('close', () => console.log('Successfully saved'));

      let transform: sharp.Sharp = sharp();
      if (format === 'jpeg' || format === 'png') {
        transform = transform.toFormat(format);
      }

      transform = transform
        .resize(width, height)
        .on('info', (fileInfo) => console.log('Successfully resized'));

      readStream.pipe(transform).pipe(writeStream);
      resolve('slow');
    }, 1000);
  });
}
