import Memcached, { Callback } from 'memcached';
import { Request, Response, NextFunction } from 'express';

const cache = new Memcached('localhost:11211');

const memcachedCache = (ttl: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.url;
    cache.get(key, (err: Error, data: any) => {
      if (err) return next(err);
      if (data) return res.json(JSON.parse(data));
      res.sendResponse = res.send;
      res.send = (body: any) => {
        cache.set(key, JSON.stringify(body), ttl, (err: Callback<boolean>) => {
          if (err) console.error(err);
        });
        res.sendResponse(body);
      };
      next();
    });
  };
};

export default memcachedCache;