"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knexConfig = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'raphael-marques',
        password: 'Bolanova1!',
        database: 'testednc',
    },
    migrations: {
        tableName: 'migrations'
    }
};
exports.default = knexConfig;