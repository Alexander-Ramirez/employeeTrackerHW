DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db; 

USE employee_db;

create table department(
    department_id int auto_increment,
    name varchar(30) not null,

    primary key (department_id)
);

create table roles(
    role_id int auto_increment not null,
    title varchar(30) not null,
    salary decimal not null,

    primary key (role_id),

    department_id INT, 
    foreign key (department_id) references department(department_id) on delete cascade
);

create table employees(
    employee_id int auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    
    primary key (employee_id),

    role_id INT, 
    foreign key (role_id) references roles(role_id) on delete cascade,

    manager_id INT, 
    foreign key (manager_id) references employees(employee_id) on delete cascade
);

