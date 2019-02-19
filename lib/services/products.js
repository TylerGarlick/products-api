"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nedb_1 = require("./nedb");
exports.default = {
    async all(query = {}, projection = {}, sort = {}, skip = 0, limit = 100) {
        const results = await nedb_1.products.find(query);
        console.log(results);
        return results;
    },
    async getById(id) {
        return await nedb_1.products.findOne({ _id: id });
    },
    async create(product) {
        return await nedb_1.products.insert(product);
    },
    async update(id, product) {
        const oldProduct = this.getById(id);
        return await nedb_1.products.update({ _id: id }, Object.assign({}, oldProduct, product));
    },
    async deleteById(id) {
        return await nedb_1.products.remove({ _id: id });
    },
    async deleteAll() {
        return await nedb_1.products.remove({});
    }
};
