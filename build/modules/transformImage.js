"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
// interface TransformSizeType {
//   height: number;
//   width: number;
// }
function resize(path, format, width, height) {
    var readStream = fs_1.default.createReadStream(path);
    var transform = sharp_1.default();
    if (format === 'jpeg' || format === 'png') {
        transform = transform.toFormat(format);
    }
    if (width || height) {
        transform = transform.resize(width, height);
    }
    return readStream.pipe(transform);
}
exports.default = resize;
//# sourceMappingURL=transformImage.js.map