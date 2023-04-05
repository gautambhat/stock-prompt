"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStockPrice = void 0;
const axios = require('axios');
const providers_1 = require("../config/providers");
async function fetchStockPrice(symbol) {
    const apiKey = providers_1.providers.alphavantage.apiKey;
    console.log('AAYA IDHAR??');
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        const stockPrice = providers_1.providers.alphavantage.responseParser(response.data);
        if (!stockPrice && stockPrice != 0) {
            throw new Error('Invalid symbol or API did not return correctly...');
        }
        return stockPrice;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
exports.fetchStockPrice = fetchStockPrice;
//# sourceMappingURL=alphavantageService.js.map