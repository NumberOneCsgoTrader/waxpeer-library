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
exports.WebsiteWebsocket = void 0;
const events_1 = __importDefault(require("events"));
const socket_io_client_1 = __importDefault(require("socket.io-client"));
class WebsiteWebsocket extends events_1.default {
    constructor(apiKey, subEvents = []) {
        super();
        this.socketOpen = false;
        this.subEvents = [];
        this.apiKey = apiKey;
        this.socket = null;
        this.connectWss();
        this.subEvents = subEvents;
    }
    connectWss() {
        return __awaiter(this, void 0, void 0, function* () {
            this.socket = (0, socket_io_client_1.default)('wss://waxpeer.com', {
                transports: ['websocket'],
                path: '/socket.io/',
                autoConnect: true,
                extraHeaders: {
                    authorization: this.apiKey,
                },
            });
            this.socket.on('connect', () => {
                this.socketOpen = true;
                this.subEvents.map((e) => { var _a; return (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('subscribe', { name: e }); });
                console.log('WebsiteWebsocket connected');
            });
            this.socket.on('error', (err) => this.emit('error', err));
            this.socket.on('disconnect', () => {
                this.socketOpen = false;
                console.log('WebsiteWebsocket disconnected');
            });
            this.socket.on('handshake', (data) => {
                this.emit('handshake', data);
            });
            this.socket.on('new', (data) => this.emit('new', data));
            this.socket.on('update', (data) => this.emit('update', data));
            this.socket.on('removed', (data) => this.emit('removed', data));
            this.socket.on('steamTrade', (data) => this.emit('steamTrade', data));
            this.socket.on('change_user', (data) => {
                this.emit('change_user', data);
            });
            this.socket.on('connect_error', (err) => {
                this.socketOpen = false;
                console.log('connect_error', err);
            });
        });
    }
    disconnectWss() {
        if (this.socket) {
            this.socket.disconnect();
            this.socketOpen = false;
        }
    }
    on(event, listener) {
        return super.on(event, listener);
    }
}
exports.WebsiteWebsocket = WebsiteWebsocket;
//# sourceMappingURL=websiteSocket.js.map