import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server UP!')
});

app.listen(PORT, () => {
  console.log(`App is running and Listening on port ${PORT}`);
});