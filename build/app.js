"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes");
var logger_1 = require("./middleware/logger");
var checkImages_1 = require("./middleware/checkImages");
var resizeImage_1 = require("./middleware/resizeImage");
// Get expess
exports.app = express_1.default();
exports.app.set('views', path_1.default.resolve(__dirname, 'views'));
exports.app.set('view engine', 'ejs');
// logger
exports.app.use(logger_1.morganMiddleware);
exports.app.use(checkImages_1.checkIfImagesExist);
exports.app.use(resizeImage_1.resizeImage);
// Routing
routes_1.routes(exports.app);
//# sourceMappingURL=app.js.map