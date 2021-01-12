/* eslint-disable no-undef */
// import isPrime from './isPrime';
import * as utils from '../utils/utils';
import fs from 'fs';
import { checkIfImagesExist } from './checkImages';
import path from 'path';

jest.mock('fs');

const mockFilesInput = Object.create(null);
const MOCK_FILE_INFO_INPUT = {
  '/path/to/image1.jpg': 'image 1',
  '/path/to/.DS_Store': 'not an image'
};
for (const file in MOCK_FILE_INFO_INPUT) {
  const dir = path.dirname(file);
  if (!mockFilesInput[dir]) {
    mockFilesInput[dir] = [];
  }
  mockFilesInput[dir].push(path.basename(file));
}

describe('your test', () => {
  jest.spyOn(utils, 'clearnFiles').mockImplementation(() => ['image1.jpg']);
  jest
    .spyOn(utils, 'createThumbnailName')
    .mockImplementation(() => 'image1_200_400.jpg');
  jest.spyOn(utils, 'imagesPath').mockImplementation(() => {
    return {
      inputPath: '/path/to/full',
      outputPath: '/path/to/thumbnails'
    };
  });
  jest
    .spyOn(fs, 'readdirSync')
    .mockImplementation(() => mockFilesInput['/path/to']);

  test('your test description', () => {
    // do something that calls the genName function
    expect(checkIfImagesExist(200, 400)).toStrictEqual({
      inputFiles: ['image1.jpg'],
      outputFiles: ['image1.jpg', '.DS_Store'],
      unResized: ['image1.jpg']
    });
  });
});
