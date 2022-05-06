CREATE TABLE users (
   id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null
)


-- DATA COLUMNS YOU CAN USE
CREATE TABLE testRows (
 id serial primary key,
 name varchar (50) not null,
 email varchar (50) not null,
 street varchar(50) not null,
 city varchar (50) not null,
 HomeState varchar(50) not null,
 Phone  varchar(9) not null,
 zipCode varchar(5) not null,
 county varchar(50) not null,
 country varchar(50) not null);


-- ENTER MULTIPLE VALUES TO THE SAME ONE COLUMN ROW
 INSERT INTO justNames (
    name
) VALUES ('Cooper'),('Sly'),('Putty'),('Pony'),('Dexter'),('Troy'),('yennifer'),('lex'),('roy'),('morgan');
