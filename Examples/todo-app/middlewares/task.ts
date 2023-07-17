import Task from '../types/task';
import express from 'express';

const taskValidationMiddleware = (req: Task.Request, res: express.Response, next: express.NextFunction) => {
  if (!req.body.title || req.body.title.length < 3) {
    res.status(400).send('Title is required, and should be at least 3 letters long!');
    return;
  }
  if (!req.body.userId) {
    res.status(400).send('User ID required');
    return;
  }

  next();
};


export {
  taskValidationMiddleware
}