import express from 'express';
import USER_DATA from '../data/MOCK_USER_DATA.js'

const loggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(`[${new Date().toLocaleString()}] [${req.method}] ${req.path}`);
  next();
  //[17-07-2023:6:36:12] [GET] /todo/task/123456
}

const rateLimitMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // console.log("rate limiting middleware");
  // console.log("User ID:" + req.headers['user-id']);
  if (req.headers['user-id']) {
    const user = USER_DATA.find((u) => u.id === req.headers['user-id']);
    if (user) {
      // res.send(`Hello ${user?.userName} You have ${user?.tokens} requests left!`);
      if (user.tokens > 0) {
        user.tokens -= 1;   // user is reference to the element in USER_DATA 
        console.log("User ID:" + req.headers['user-id']);
        console.log("Tokens Left:" + user.tokens);
        next();
      } else {
        res.status(429).send("Bro, You used all of you tokens!");
      }
    } else {
      res.status(401).send("Bro, I don't even know you! GO AWAY");
    }
  } else {
    res.status(401).send("Bro, You are not even allowed here! GO AWAY");
  }
}

export {
  loggerMiddleware,
  rateLimitMiddleware
}