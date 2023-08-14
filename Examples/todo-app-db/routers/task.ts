import express from 'express';
import Task from '../types/task.js';
import { taskValidationMiddleware } from '../middlewares/task.js';
import { Todo } from '../db/entity/Todo.js';

const router = express.Router();

const data: any = [];

router.post('/', taskValidationMiddleware);
router.put('/:id', taskValidationMiddleware);

router.get('/', async (req: Task.Request, res: Task.Response) => {
  try {
    const page = parseInt(req.query.page || '1');
    const pageSize = parseInt(req.query.pageSize || '10');

    const [items, total] = await Todo.findAndCount({
      // where: { status: 'done' },
      skip: pageSize * (page - 1),
      take: pageSize,
      select: {
        id: true,
        userId: false,
        title: true,
        description: true,
        status: true
      },
      order: {
        createdAt: 'ASC'
      }
    });

    // count all items
    // const total = await Todo.count();

    res.send({
      page: 1,
      pageSize: items.length,
      total,
      items
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!");
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  // const task = await Todo.findOne({ where: { id } });
  const task = await Todo.findOneBy({ id });
  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).send("Task not found");
  }
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