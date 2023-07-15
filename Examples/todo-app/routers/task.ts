import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('All Tasks');
});

router.get('/:id', (req, res) => {
  res.send('Task by ID');
});

router.post('/', (req, res) => {
  res.send('Task Created');
});

router.put('/:id', (req, res) => {
  res.send('Task Updated');
});

router.delete('/:id', (req, res) => {
  res.send('Task Deleted');
});

export default router;