"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv');
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var http = require("http").createServer(app);
app.use(require('cors')());
var io = require("socket.io")(http);
var PORT = 5000;
var server = express_1.default()
    .use(app)
    .listen(PORT, function () { return console.log("Listening Socket on " + PORT); });
var socket = io.listen(server);
socket.on('connection', function (client) {
    console.log(client.id + " is connected");
    var counter = 0;
    var looper = setInterval(function () {
        var _a;
        counter++;
        if (counter >= 15) {
            clearInterval(looper);
        }
        socket.emit('announcements', (_a = {}, _a[counter] = new Date(), _a));
    }, 1000);
});
//# sourceMappingURL=server.js.map