const axios = require('axios');
import { providers } from '../config/providers';

export async function fetchStockPrice(symbol: string): Promise<number> {
  const apiKey = providers.alphavantage.apiKey;

  console.log('AAYA IDHAR??');

  const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      const stockPrice = providers.alphavantage.responseParser(response.data);
      if (!stockPrice && stockPrice != 0) {
        throw new Error('Invalid symbol or API did not return correctly...');
      }
      return stockPrice;
    } catch (error) {
      console.error(error);
      throw error;
    }
}