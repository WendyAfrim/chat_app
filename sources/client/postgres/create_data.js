import  {pool} from './db.js' ;


let database = () => {

    let self = {};

    self.init = () => {
        self.createTableUser();
    }

    self.createTableUser = async () => {
        const  query =  `CREATE TABLE IF NOT EXISTS user_socket (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role_user VARCHAR(255) NOT NULL,
            online BOOLEAN NOT NULL
        )` ;
        try  {
            const  res =  await  pool
                .query(query).then(()=> {
                    self.createDataFixtures();
                })
        }  catch  (err) {
           
            console .log(err);
        }
    };

    self.createDataFixtures = async () => {
        const  query =  `INSERT INTO user_socket (name, email, password, role_user, online) 
        VALUES  ('John', 'john@fake.com' , '123456','ROLE_USER', false), 
                ('Jane', 'jane@fake.com' , '123456','ROLE_USER', false), 
                ('Jack', 'jack@fake.com ', '123456','ROLE_ADMIN', false),
                ('Jill', 'jill@fake.com' , '123456','ROLE_ADMIN', false)` ;
        try  {
            const  res =  await  pool
             .query(query)
        }  catch  (err) {
        console .log(err);
        }
    }

    return self;
}

database().init();