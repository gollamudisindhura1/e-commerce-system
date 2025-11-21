"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllProducts = fetchAllProducts;
exports.fetchProductById = fetchProductById;
const errorHandler_1 = require("../utils/errorHandler");
const node_fetch_1 = __importDefault(require("node-fetch"));
async function fetchAllProducts() {
    try {
        const response = await (0, node_fetch_1.default)("https://dummyjson.com/products?limit=10");
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch Products: ${response.statusText}`, response.status);
        }
        const data = await response.json();
        const result = data;
        return result.products;
    }
    catch (error) {
        throw error instanceof errorHandler_1.ApiError ? error : new errorHandler_1.ApiError("Network or parsing Error");
    }
}
async function fetchProductById(id) {
    try {
        const response = await (0, node_fetch_1.default)(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Product ${id} not found`, response.status);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error instanceof errorHandler_1.ApiError ? error : new errorHandler_1.ApiError("Network error");
    }
}
