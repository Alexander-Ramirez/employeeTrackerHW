insert into department (name) 
values ("Tutoring"), ("Office Work");

insert into roles (title, salary, department_id)
values ("Director", 75000, 1), ("Counselor", 65000, 2), ("Tutor Cordinator", 60000, 3), ("Tutor", 15000, 4);

insert into employees (first_name, last_name, role_id, manager_id) 
values ("Guy", "Guy", 1, null), ("Willy", "Wanka", 2, 1), ("Taco", "Bell", 3, 1), ("Davey", "Jones", 4, 1);
