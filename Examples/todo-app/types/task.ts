import express from 'express';
namespace Task {
  export interface Item {
    id: string,
    userId: number,
    title: string,
    description: string,
    status: "new" | "done"
  }

  export interface Request extends express.Request {
    body: {
      userId: number,
      title: string,
      description: string
    }
  }

  export interface Response extends express.Response {

  }

  export interface Mish3arfEash {

  }
}

export default Task;