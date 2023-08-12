import express from 'express';
import Task from '../types/task.js';
import { taskValidationMiddleware } from '../middlewares/task.js';
import { Todo } from '../db/entity/Todo.js';

const router = express.Router();

const data: any = [];

router.post('/', taskValidationMiddleware);
router.put('/:id', taskValidationMiddleware);

router.get('/', async (req: Task.Request, res: Task.Response) => {
  // const page = parseInt(req.query.page || '1');
  // const pageSize = parseInt(req.query.pageSize || '10');
  // const filteredItems = data.slice((page - 1) * pageSize, page * pageSize);
  try {
    const items = await Todo.find();

    res.send({
      page: 1,
      pageSize: items.length,
      total: items.length,
      items
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!");
  }
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  // const task = data.find(it => it.id === id);
  // if (task) {
  //   res.status(200).send(task);
  // } else {
  //   res.status(404).send("Task not found");
  // }
});

router.post('/', (req: Task.Request, res: Task.Response) => {
  const newTask = new Todo();
  newTask.title = req.body.title;
  newTask.description = req.body.description;
  newTask.userId = req.body.userId;

  newTask.save().then((response) => {
    res.status(201).send('Task Created with ID:' + response.id);
  }).catch(error => {
    console.error(error);
    res.status(500).send('Something went wrong');
  });
});

router.put('/:id', (req, res) => {
  res.send('Task Updated');
});

router.delete('/:id', (req, res) => {
  res.send('Task Deleted');
});
export default router;