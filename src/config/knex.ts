import { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'usuario',
    password: 'senha',
    database: 'testednc',
  },
  migrations: {
    tableName: 'migrations'
  }
};

export default knexConfig;
