import express from 'express';
import "reflect-metadata";
import taskRouter from './routers/task.router.js';
import userRouter from './routers/user.router.js';
import { loggerMiddleware, rateLimitMiddleware } from './middlewares/generic.js';
import db from './db/index.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(loggerMiddleware);
app.use(rateLimitMiddleware);

app.get('/', (req, res) => {
  res.send('Server UP!');
});

app.use('/todo/task', taskRouter);
app.use('/todo/user', userRouter);

app.use((req, res) => {
  res.status(404).send("You requested something I don't have :(");
});

app.listen(PORT, () => {
  console.log(`App is running and Listening on port ${PORT}`);
  db.initialize();
});