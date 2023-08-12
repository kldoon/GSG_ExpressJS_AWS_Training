import { DataSource } from 'typeorm';
import { Todo } from './entity/Todo.js';

const db = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gsg_todo',
  entities: [Todo],
  synchronize: true
});

const initialize = () => {
  db.initialize().then(() => {
    console.log("Connected to DB!");
  }).catch(err => {
    console.error('Failed to connect to DB: ' + err);
  })
}

export default { initialize };