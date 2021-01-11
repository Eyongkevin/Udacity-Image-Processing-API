"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumbnailName = exports.clearnFiles = exports.imagesPath = void 0;
var path_1 = __importDefault(require("path"));
var imagesPath = function (dirname) {
    var pathList = dirname.split(path_1.default.sep);
    pathList.pop();
    return {
        inputPath: path_1.default.join(pathList.join(path_1.default.sep), 'public', 'images', 'full'),
        outputPath: path_1.default.join(pathList.join(path_1.default.sep), 'public', 'images', 'thumbnails')
    };
};
exports.imagesPath = imagesPath;
var clearnFiles = function (files) {
    var newFiles = [];
    files.forEach(function (file) {
        if (!file.startsWith('.')) {
            newFiles.push(file);
        }
    });
    return newFiles;
};
exports.clearnFiles = clearnFiles;
var createThumbnailName = function (file, width, height) {
    var _a = file.split('.'), filename = _a[0], ext = _a[1];
    return filename + "_" + width + "_" + height + "." + ext;
};
exports.createThumbnailName = createThumbnailName;
//# sourceMappingURL=utils.js.map