"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.Server = void 0;
var Server_1 = require("./Server");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return Server_1.default; } });
var router_1 = require("./router");
Object.defineProperty(exports, "router", { enumerable: true, get: function () { return router_1.default; } });
__exportStar(require("./routes"), exports);
//# sourceMappingURL=index.js.map