import sharp from 'sharp';
import fs from 'fs';

// interface TransformSizeType {
//   height: number;
//   width: number;
// }

export default function resize(
  path: string,
  format: string,
  width: number,
  height: number
) {
  const readStream = fs.createReadStream(path);
  let transform = sharp();

  if (format === 'jpeg' || format === 'png') {
    transform = transform.toFormat(format);
  }

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
}
