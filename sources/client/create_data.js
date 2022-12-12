import  {pool} from './db.js' ;

// create table user with id, name, email, password, role_user
const  createTableUser =  async  () => {
        const  query =  `CREATE TABLE IF NOT EXISTS user_socket (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role_user VARCHAR(255) NOT NULL
        )` ;
        try  {
            const  res =  await  pool
                .query(query)
        }  catch  (err) {
            console .log(err);
        }
    };

// create fake data
const  createData =  async  () => {
        const  query =  `INSERT INTO user_socket (name, email, password, role_user) 
                            VALUES  ('John', 'john@fake.com' , '123456','ROLE_USER'), 
                                    ('Jane', 'jane@fake.com' , '123456','ROLE_USER'), 
                                    ('Jack', 'jack@fake.com ', '123456','ROLE_ADMIN'),
                                    ('Jill', 'jill@fake.com' , '123456','ROLE_ADMIN')` ;
        try  {
            const  res =  await  pool
                .query(query)
        }  catch  (err) {
            console .log(err);
        }
    };


createTableUser();
createData();