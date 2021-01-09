"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var logger_1 = require("./middleware/logger");
// Get expess
exports.app = express_1.default();
// logger
exports.app.use(logger_1.morganMiddleware);
// Routing
routes_1.routes(exports.app);
//# sourceMappingURL=app.js.map