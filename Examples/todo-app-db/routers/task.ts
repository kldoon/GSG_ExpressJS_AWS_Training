import express from 'express';
import Task from '../types/task.js';
import { taskValidationMiddleware } from '../middlewares/task.js';
import { Todo } from '../db/entity/Todo.js';
import { Like, MoreThan } from 'typeorm';
import db from '../db/index.js';

const router = express.Router();

router.post('/', taskValidationMiddleware);

router.get('/', async (req: Task.Request, res: Task.Response) => {
  try {
    const page = parseInt(req.query.page || '1');
    const pageSize = parseInt(req.query.pageSize || '10');

    const [items, total] = await Todo.findAndCount({
      skip: pageSize * (page - 1),
      take: pageSize,
      order: {
        createdAt: 'ASC'
      },
      relations: ['user']
      // loadRelationIds: true,
    });

    res.send({
      page,
      pageSize: items.length,
      total,
      items
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!");
  }
});

router.get('/recent', async (req: Task.Request, res: any) => {
  try {
    const items = await Todo.find({
      where: {
        createdAt: MoreThan(new Date('2023-08-15 00:00:00'))
      }
    });

    res.send({
      items,
      total: items.length
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!");
  }
});

router.get('/search', async (req: any, res: any) => {
  const term = req.query.term;
  try {
    const items = await Todo.find({
      where: [  // No it is an OR operation
        { title: Like(`%${term}%`) },
        { description: Like(`%${term}%`) }
      ]
    });

    // usersTotal is a meaningless number (just to demo the sum)
    const usersTotal = await Todo.sum('user', {});

    res.send({
      items,
      total: items.length,
      usersTotal
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!");
  }
});

router.get('/sql', async (req, res) => {
  const results = await db.dataSource.manager.query(`SELECT * FROM todo WHERE status='done'`)
  res.send(results);
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
  newTask.user = req.body.userId;

  newTask.save().then((response) => {
    res.status(201).send('Task Created with ID:' + response.id);
  }).catch(error => {
    console.error(error);
    res.status(500).send('Something went wrong');
  });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Todo.findOneBy({ id });
  if (task) {
    // task.title = req.body.title;
    // task.description = req.body.description;
    task.status = 'done';
    task.save();
    res.send('Task Updated');
  } else {
    res.status(404).send('Task not found!');
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Todo.findOneBy({ id });
  if (task) {
    task.remove();
    res.send('Task Deleted');
  } else {
    res.status(404).send('Task not found!');
  }
});

export default router;