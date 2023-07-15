import express from 'express';
import taskRouter from './routers/task.js';
import userRouter from './routers/user.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server UP!')
});

app.use('/todo/task', taskRouter);
app.use('/todo/user', userRouter);

app.listen(PORT, () => {
  console.log(`App is running and Listening on port ${PORT}`);
});