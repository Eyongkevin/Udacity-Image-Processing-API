"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
// import isPrime from './isPrime';
var utils = __importStar(require("../utils/utils"));
var fs_1 = __importDefault(require("fs"));
var checkImages_1 = require("./checkImages");
var path_1 = __importDefault(require("path"));
jest.mock('fs');
var mockFilesInput = Object.create(null);
var MOCK_FILE_INFO_INPUT = {
    '/path/to/image1.jpg': 'image 1',
    '/path/to/.DS_Store': 'not an image'
};
for (var file in MOCK_FILE_INFO_INPUT) {
    var dir = path_1.default.dirname(file);
    if (!mockFilesInput[dir]) {
        mockFilesInput[dir] = [];
    }
    mockFilesInput[dir].push(path_1.default.basename(file));
}
describe('your test', function () {
    jest.spyOn(utils, 'clearnFiles').mockImplementation(function () { return ['image1.jpg']; });
    jest
        .spyOn(utils, 'createThumbnailName')
        .mockImplementation(function () { return 'image1_200_400.jpg'; });
    jest.spyOn(utils, 'imagesPath').mockImplementation(function () {
        return {
            inputPath: '/path/to/full',
            outputPath: '/path/to/thumbnails'
        };
    });
    jest
        .spyOn(fs_1.default, 'readdirSync')
        .mockImplementation(function () { return mockFilesInput['/path/to']; });
    test('your test description', function () {
        // do something that calls the genName function
        expect(checkImages_1.checkIfImagesExist(200, 400)).toStrictEqual({
            inputFiles: ['image1.jpg'],
            outputFiles: ['image1.jpg', '.DS_Store'],
            unResized: ['image1.jpg']
        });
    });
});
//# sourceMappingURL=checkImages.test.js.map