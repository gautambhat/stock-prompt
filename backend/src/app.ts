import express, { Request, Response } from 'express';
import stockRoutes from './routes/stocks';

const port = 9000;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`<h2>Hello, World!</h2>\n Actually, you...I see your IP is ${req.ip}. Listen up, now. I'm an API server, and I'd appreciate it if you call some of my REST methods instead.`);
});

app.use('/', stockRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
