"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websiteSocket_1 = require("./Sockets/websiteSocket");
const WS = new websiteSocket_1.WebsiteWebsocket(process.env.WAXPEER_API, ['csgo']);
WS.on('handshake', (data) => {
    data.message === 'No authentication or session';
});
WS.on('steamTrade', (data) => {
    console.log('steamTrade', data);
});
WS.on('removed', (data) => {
    console.log('removed', data);
});
WS.on('new', (data) => {
    console.log('new', data);
});
WS.on('update', (data) => {
    console.log('update', data);
});
WS.on('error', (err) => console.log(err));
//# sourceMappingURL=example.js.map