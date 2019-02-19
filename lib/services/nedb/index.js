"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nedb_promise_1 = __importDefault(require("nedb-promise"));
exports.products = nedb_promise_1.default({
    filename: 'db/products.json',
    autoload: true
});
exports.categories = nedb_promise_1.default({
    filename: 'db/categories.json',
    autoload: true
});
