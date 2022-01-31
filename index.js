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
                  "add role", "add employee", "update employee", "quit"]
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
        case "update employee":
                updateEmployee();
            break;
        case "quit":
                iQuit();
            break;
        default:
            break;
    };

};

async function updateRole() {
      // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
  // query database
  const [rows, fields] = await connection.execute("select * from employees");

  console.table(rows);
};