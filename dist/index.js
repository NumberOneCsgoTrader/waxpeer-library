"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteWebsocket = exports.TradeWebsocket = exports.Waxpeer = void 0;
const waxpeer_1 = require("./waxpeer");
Object.defineProperty(exports, "Waxpeer", { enumerable: true, get: function () { return waxpeer_1.Waxpeer; } });
const tradeSocket_1 = require("./Sockets/tradeSocket");
Object.defineProperty(exports, "TradeWebsocket", { enumerable: true, get: function () { return tradeSocket_1.TradeWebsocket; } });
const websiteSocket_1 = require("./Sockets/websiteSocket");
Object.defineProperty(exports, "WebsiteWebsocket", { enumerable: true, get: function () { return websiteSocket_1.WebsiteWebsocket; } });
//# sourceMappingURL=index.js.map