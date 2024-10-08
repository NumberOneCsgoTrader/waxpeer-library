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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeWebsocket = void 0;
const events_1 = require("events");
const ws_1 = __importDefault(require("ws"));
class TradeWebsocket extends events_1.EventEmitter {
    /**
     * Represents a TradeSocket object.
     * @constructor
     * @param {string} [apiKey] - The Steam API key.
     * @param {string} steamid - The Steam ID.
     * @param {string} tradelink - The trade link.
     * @param {string} [waxApi] - The Waxpeer API.
     * @param {string} [accessToken] - The access token as string NOT encoded.
     * @throws {Error} If Steam API or Waxpeer API or access token is not provided.
     */
    constructor(apiKey, steamid, tradelink, waxApi, accessToken) {
        super();
        this.w = {
            ws: null,
            tries: 0,
            int: null,
        };
        this.allowReconnect = true;
        this.readyStatesMap = {
            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3,
        };
        this.apiKey = apiKey;
        this.steamid = steamid;
        this.tradelink = tradelink;
        this.waxApi = waxApi;
        this.accessToken = accessToken;
        if (!this.apiKey && !this.waxApi && !this.accessToken)
            throw new Error("Steam API or Waxpeer API or access token is required");
        this.connectWss();
    }
    socketOpen() {
        var _a;
        return ((_a = this.w.ws) === null || _a === void 0 ? void 0 : _a.readyState) === this.readyStatesMap.OPEN;
    }
    connectWss() {
        return __awaiter(this, void 0, void 0, function* () {
            this.allowReconnect = true;
            if (this.w && this.w.ws && this.w.ws.readyState !== this.readyStatesMap.CLOSED)
                this.w.ws.terminate();
            let t = (this.w.tries + 1) * 1e3;
            this.w.ws = new ws_1.default("wss://wssex.waxpeer.com");
            this.w.ws.on("error", (e) => {
                console.log("TradeWebsocket error", e);
            });
            this.w.ws.on("close", (e) => {
                this.w.tries += 1;
                console.log(`TradeWebsocket closed`, this.steamid);
                setTimeout(function () {
                    var _a, _b;
                    if (this.steamid && this.apiKey && this.allowReconnect && ((_b = (_a = this.w) === null || _a === void 0 ? void 0 : _a.ws) === null || _b === void 0 ? void 0 : _b.readyState) !== this.readyStatesMap.OPEN) {
                        return this.connectWss(this.steamid, this.apiKey, this.tradelink);
                    }
                }.bind(this), t);
            });
            this.w.ws.on("open", (e) => {
                console.log(`TradeWebsocket opened`, this.steamid);
                if (this.steamid) {
                    clearInterval(this.w.int);
                    let authObject = {
                        name: "auth",
                        steamid: this.steamid,
                        tradeurl: this.tradelink,
                        source: "des.labs",
                        info: { version: "0.0.1" },
                    };
                    if (this.apiKey)
                        authObject.apiKey = this.apiKey;
                    if (this.waxApi)
                        authObject.waxApi = this.waxApi;
                    if (this.accessToken)
                        authObject.accessToken = this.accessToken;
                    this.w.ws.send(JSON.stringify(authObject));
                    this.w.int = setInterval(() => {
                        var _a;
                        if (((_a = this.w) === null || _a === void 0 ? void 0 : _a.ws) && this.w.ws.readyState === this.readyStatesMap.OPEN)
                            this.w.ws.send(JSON.stringify({ name: "ping" }));
                    }, 25000);
                }
                else {
                    this.w.ws.close();
                }
            });
            this.w.ws.on("message", (e) => {
                try {
                    let jMsg = JSON.parse(e);
                    if (jMsg.name === "pong")
                        return;
                    if (jMsg.name === "send-trade") {
                        this.emit("send-trade", jMsg.data);
                    }
                    if (jMsg.name === "cancelTrade") {
                        this.emit("cancelTrade", jMsg.data);
                    }
                    if (jMsg.name === "accept_withdraw") {
                        this.emit("accept_withdraw", jMsg.data);
                    }
                    if (jMsg.name === "user_change") {
                        this.emit("user_change", jMsg.data);
                    }
                }
                catch (e) {
                    console.log(e);
                }
            });
        });
    }
    disconnectWss() {
        if (this.w && this.w.ws) {
            clearInterval(this.w.int);
            this.allowReconnect = false;
            this.w.ws.close();
        }
    }
}
exports.TradeWebsocket = TradeWebsocket;
//# sourceMappingURL=tradeSocket.js.map