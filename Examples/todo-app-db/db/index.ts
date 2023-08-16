import { DataSource } from 'typeorm';
import { Todo } from './entity/Todo.js';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gsg_todo',
  entities: [Todo],
  synchronize: true,
  logging: true
});

const initialize = () => {
  dataSource.initialize().then(() => {
    console.log("Connected to DB!");
  }).catch(err => {
    console.error('Failed to connect to DB: ' + err);
  })
}

export default { initialize, dataSource };