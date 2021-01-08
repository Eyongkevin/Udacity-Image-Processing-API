import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const PORT = 5000;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello Welcome!' });
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
