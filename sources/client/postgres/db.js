import { Pool } from 'postgres-pool';

const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

export { pool };