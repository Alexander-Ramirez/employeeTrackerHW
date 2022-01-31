const inquire = require("inquirer");
const mysql = require("mysql2/promise");

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    port: "3006",
    password: "",
    database: "employee_db"
});

startProgram();

function startProgram() {
    const {mainList} =  inquire.prompt([{
        name: "mainList",
        type: "list",
        message: "What do you want to do?",
        choices: ["show departments", "show employees", "show roles", "add department", 
                  "add role", "add employee", "quit"]
    }]);

    switch (mainList) {
        case "show departments":
                showDepartments();
            break;
        case "show employees":
                showEmployees();
            break;
        case "show roles":
                showRoles();
            break;
        case "add department":
                addDepartment();
            break;
        case "add role":
                addRole();
            break;
        case "add employee":
                addEmployee();
            break;
        case "end":
                iQuit();
            break;
        default:
            break;
    };
};

async function showDepartments() {
      // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
  // query database
  const [rows, fields] = await connection.execute("select * from department");

  console.table(rows);

  startProgram();
};

async function showEmployees() {
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
    // query database
    const [rows, fields] = await connection.execute("select * from employees");

    console.table(rows);

    startProgram();
};

async function showRoles() {
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
    // query database
    const [rows, fields] = await connection.execute("select * from roles");

    console.table(rows);

    startProgram();
};

async function addDepartment() {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});

    const newDepartment = await inquire.prompt ([{
        name: "department",
        type: "input",
        message: "what is the new department name?"
    }]);

    let department = newDepartment.department;

    const [rows, fields] = await connection.execute(`INSERT INTO department (name) VALUES (?)`, [department]);

    showDepartments();
};

async function addRole() {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});

    const newRole = await inquire.prompt ([{
        name: "role_id",
        type: "input",
        message: "what is the new role?"
    },
    {
        name: "title",
        type: "input",
        message: "what is the title of the new role?"
    },
    {
        name: "salary",
        type: "input",
        message: "what is the salary new role?"
    }
]);

    let role_id = newRole.role_id;
    let title = newRole.title;
    let salary = newRole.salary;

    const [rows, fields] = await connection.execute(`INSERT INTO department (name) VALUES (?)`, [role_id, title, salary]);

    showRoles();
};

async function addEmployee() {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});

    const newEmployee = await inquire.prompt ([{
        name: "first_name",
        type: "input",
        message: "what is the first name of the new employee?"
    },
    {
        name: "last_name",
        type: "input",
        message: "what is the last name of the new employee?"
    },
    {
        name: "role_id",
        type: "input",
        message: "what is the role if of the new employee?"
    },
    {
        name: "manager_id",
        type: "input",
        message: "what is the manager id of the new employee?"
    }

]);

    let first_name = newEmployee.first_name;
    let last_name = newEmployee.last_name;
    let role_id = newEmployee.roles_id;
    let manager_id = newEmployee.manager_id;

    const [rows, fields] = await connection.execute(`INSERT INTO department (name) VALUES (?)`, [first_name, last_name, role_id, manager_id]);

    showEmployees();
};