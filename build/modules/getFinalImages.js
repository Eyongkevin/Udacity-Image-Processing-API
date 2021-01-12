"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalImages = void 0;
var fs_1 = __importDefault(require("fs"));
var finalImages = function (width, height, outputPath) {
    var subStringToTarget = "_" + width + "_" + height;
    var outputFiles = fs_1.default.readdirSync(outputPath);
    return outputFiles.filter(function (file) {
        return subStringToTarget === file.substring(file.indexOf('_'), file.indexOf('.'));
    });
};
exports.finalImages = finalImages;
//# sourceMappingURL=getFinalImages.js.map