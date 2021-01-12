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
var pageNotFound404_middleware_1 = require("./middleware/pageNotFound404.middleware");
// Get expess
exports.app = express_1.default();
exports.app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.set('views', path_1.default.resolve(__dirname, 'views'));
exports.app.set('view engine', 'ejs');
// logger middleware
exports.app.use(logger_1.morganMiddleware);
// Routing
routes_1.routes(exports.app);
// page not found middleware
exports.app.use(pageNotFound404_middleware_1.pageNotFound404);
//# sourceMappingURL=app.js.map