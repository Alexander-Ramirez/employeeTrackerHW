-- create database employeedb; 

use employeedb;
create table employee(
    id int primary key auto_increment,
    name varchar(30),
    role_id int
);

insert into employee (id, name, role_id) values (1, "Alex", 1)