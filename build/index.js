"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 5000;
// Application routing
app.use('/', function (req, res, next) {
    res.status(200).send({ data: "Hello Welcome!" });
});
// Start server
app.listen(PORT, function () { return console.log("Server started on port " + PORT + "!"); });
//# sourceMappingURL=index.js.map