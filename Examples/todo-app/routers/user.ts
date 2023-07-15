import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('All Users');
});

router.get('/:id', (req, res) => {
  res.send('User by ID');
});

router.post('/', (req, res) => {
  res.send('User Created');
});

router.put('/:id', (req, res) => {
  res.send('User Updated');
});

router.delete('/:id', (req, res) => {
  res.send('User Deleted');
});

export default router;