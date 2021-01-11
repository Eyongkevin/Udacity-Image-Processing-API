"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
var express_1 = require("express");
// import path from 'path';
// import fs from 'fs';
// import resize from '../modules/transformImage';
// import { imagesPath } from '../utils/utils';
exports.IndexController = express_1.Router();
// const { inputPath, outputPath } = imagesPath(__dirname);
exports.IndexController.get('/*', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var finalOutputFiles, finalPath;
    var _a;
    return __generator(this, function (_b) {
        finalOutputFiles = [];
        finalPath = '';
        if (res.locals.noParams && res.locals.isInputImage) {
            console.log('Display normal sized images');
            next();
        }
        else if (res.locals.noParams && !res.locals.isInputImage) {
            console.log('Error, no images to display');
            next();
        }
        else if (((_a = res.locals.unResized) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            console.log('display all sized images of that width and height');
            finalOutputFiles = [
                'encenadaport_500_400.jpg',
                'fjord_500_400.jpg',
                'icelandwaterfall_500_400.jpg',
                'palmtunnel_500_400.jpg',
                'santamonica_500_400.jpg'
            ];
            //   const { h, w } = req.query;
            //   const width: number | null = w ? parseInt(w as string, 10) : null;
            //   const height: number | null = h ? parseInt(h as string, 10) : null;
            //   const subStringToTarget: string = `_${width}_${height}`;
            //   const outputFiles: string[] = fs.readdirSync(outputPath);
            //   finalPath = outputPath;
            //   finalOutputFiles = outputFiles.filter((file) =>
            //     file.includes(subStringToTarget)
            //   );
            //   console.log('Images to display: ', finalOutputFiles);
        }
        else {
            console.log('Nothing yet');
        }
        res.render('index', {
            images: finalOutputFiles,
            path: finalPath
        });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=IndexController.js.map