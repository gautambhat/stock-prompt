"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memcached_1 = __importDefault(require("memcached"));
const cache = new memcached_1.default('localhost:11211');
const memcachedCache = (ttl) => {
    return (req, res, next) => {
        const key = req.url;
        cache.get(key, (err, data) => {
            if (err)
                return next(err);
            if (data)
                return res.json(JSON.parse(data));
            res.sendResponse = res.send;
            res.send = (body) => {
                cache.set(key, JSON.stringify(body), ttl, (err) => {
                    if (err)
                        console.error(err);
                });
                res.sendResponse(body);
            };
            next();
        });
    };
};
exports.default = memcachedCache;
//# sourceMappingURL=memcachedCache.js.map