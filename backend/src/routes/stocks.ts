import express, { Request, Response } from 'express';
import * as uuid from 'uuid';
import { fetchStockPrice } from '../services/alphavantageService';
import memcachedCache from '../services/memcachedCache';

const router = express.Router();

interface Stock {
  id: number;
  symbol: string;
  currentPrice: number;
}

// GET /stocks/:symbol
router.get('/stocks/:symbol', async (req: Request, res: Response) => { // add memcachedCache(300) later; first get the DB up and running
  const { symbol } = req.params;
  try {
    const stockPrice: number = await fetchStockPrice(symbol);
    const result: Stock = {
      id: uuid.v4(),
      symbol,
      currentPrice: stockPrice,
    };
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
