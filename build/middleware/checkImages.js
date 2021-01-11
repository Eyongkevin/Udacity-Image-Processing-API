"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfImagesExist = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils/utils");
var _a = utils_1.imagesPath(__dirname), inputPath = _a.inputPath, outputPath = _a.outputPath;
var checkIfImagesExist = function (req, res, next) {
    var _a = req.query, h = _a.h, w = _a.w;
    var width = w ? parseInt(w, 10) : null;
    var height = h ? parseInt(h, 10) : null;
    var unResized = [];
    var outputFiles = [];
    var inputFiles = [];
    outputFiles = fs_1.default.readdirSync(outputPath);
    inputFiles = fs_1.default.readdirSync(inputPath);
    inputFiles = utils_1.clearnFiles(inputFiles);
    console.log('input file ', inputFiles);
    if (width === null && height === null) {
        res.locals.noParams = true;
        res.locals.isInputImage = inputFiles.length > 0;
        next();
    }
    else {
        inputFiles.forEach(function (file) {
            var thumbnailFile = utils_1.createThumbnailName(file, width, height);
            if (!outputFiles.includes(thumbnailFile)) {
                unResized.push(file);
            }
        });
        res.locals.resizeStatus = 'passed';
        res.locals.unResized = unResized;
        next();
    }
};
exports.checkIfImagesExist = checkIfImagesExist;
//# sourceMappingURL=checkImages.js.map