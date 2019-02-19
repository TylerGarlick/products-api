"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const micro_1 = require("micro");
exports.indexHello = (req, res) => {
    const data = {
        status: 'ok',
        data: {
            hello: [
                { toWho: 'world' },
                { toWho: 'Memphis' },
                { toWho: 'folks' },
                { toWho: 'fellas' },
                { toWho: 'everyone' }
            ]
        }
    };
    micro_1.send(res, 200, data);
};
exports.getHello = (req, res) => {
    const data = {
        status: 'ok',
        data: {
            toWho: req.params.toWho
        }
    };
    micro_1.send(res, 200, data);
};
