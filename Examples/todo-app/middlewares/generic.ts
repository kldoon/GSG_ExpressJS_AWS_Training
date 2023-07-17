import express from 'express';

const loggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(`[${new Date().toLocaleString()}] [${req.method}] ${req.path}`);
  next();
  //[17-07-2023:6:36:12] [GET] /todo/task/123456
}

export {
  loggerMiddleware
}