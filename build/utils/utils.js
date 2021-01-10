"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesPath = void 0;
var path_1 = __importDefault(require("path"));
var imagesPath = function (dirname) {
    var pathList = dirname.split(path_1.default.sep);
    pathList.pop();
    return path_1.default.join(pathList.join(path_1.default.sep), 'public', 'images', 'full');
};
exports.imagesPath = imagesPath;
//# sourceMappingURL=utils.js.map