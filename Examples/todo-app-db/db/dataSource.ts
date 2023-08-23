import { DataSource } from 'typeorm';
import { Todo } from './entity/Todo.js';
import { User } from './entity/User.js';
import { Profile } from './entity/Profile.js';
import { Tag } from './entity/Tag.js';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gsg_todo',
  entities: [Todo, User, Profile, Tag],
  migrations: ['./**/migration/*.ts'],
  synchronize: true,
  logging: true
});

export default dataSource;