"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const micro_1 = require("micro");
const microrouter_1 = require("microrouter");
const services_1 = require("./services");
exports.default = microrouter_1.router(microrouter_1.get('/', async (req, res) => {
    return await services_1.products.all();
}), microrouter_1.post('/', async (req, res) => {
    const product = await micro_1.json(req);
    return await services_1.products.create(product);
})
// get('/hello', indexHello),
// get('/hello/:toWho', getHello)
);
