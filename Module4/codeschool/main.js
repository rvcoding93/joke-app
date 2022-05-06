const pgp = require('pg-promise')();
const config = {
    host: 'localhost',
    port: 5432,
    database: 'codeschool',
    user: 'corcoding',
}

const db = pgp(config);


// db.query(`CREATE TABLE students (
//     id serial primary key,
//     name VARCHAR(5)
//     email VARCHAR(50)
//     )`
// );

const addStudent = function (name, email) {
    db.query(`INSERT INTO students (name, email) VALUES ('${name}','${email}')`);
    console.log(`${name} was added as a new student!`);
};

addStudent("Awa Fall" , "awa@finally.com");



//Result('SELECT * FROM resturant')
//     .then((results) => 
//     console.log(row);
//     console.log(row.id, row.name);
//     })
// {)
// .catch((e) => {/*handle error*/})