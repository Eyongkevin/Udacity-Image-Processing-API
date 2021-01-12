"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var IndexController_1 = require("./controllers/IndexController");
var ParamsController_1 = require("./controllers/ParamsController");
var _routes = [
    ['/', IndexController_1.IndexController],
    ['/', ParamsController_1.ParamController]
];
var routes = function (app) {
    _routes.forEach(function (route) {
        var url = route[0], controller = route[1];
        app.use(url, controller);
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map