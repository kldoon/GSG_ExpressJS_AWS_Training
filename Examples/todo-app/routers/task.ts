import express from 'express';
import data from '../data/MOCK_DATA.js';
import Task from '../types/task.js';
import { v4 } from 'uuid';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const task = data.find(it => it.id === id);
  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).send("Task not found");
  }
});

router.post('/', (req: Task.Request, res: Task.Response) => {
  if (!req.body.title || !req.body.userId) {
    res.status(400).send('Title and UserID are required!');
    return;
  }

  const newTask: Task.Item = {
    id: v4(),
    status: 'new',
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId
  };
  
  data.unshift(newTask);
  res.status(201).send('Task Created');
});

router.put('/:id', (req, res) => {
  res.send('Task Updated');
});

router.delete('/:id', (req, res) => {
  res.send('Task Deleted');
});

export default router;