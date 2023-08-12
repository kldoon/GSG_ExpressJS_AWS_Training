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
    },
    query: {
      page: string;
      pageSize: string;
    }
  }

  export interface Response extends express.Response {
    send: (body: string | {
      page: number,
      pageSize: number,
      total: number,
      items: Array<Item>   // Item[]
    }) => this
  }
}

export default Task;