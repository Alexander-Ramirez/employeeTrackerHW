const inquire = require("inquirer");
const mysql = require("mysql2/promise");

startProgram();
async function startProgram() {
    const {choice} = await inquire.prompt([{
        name: "choice",
        type: "list",
        message: "What do you want to do?",
        choices: ["update role", "show employees"]
    }]);

    switch (choice) {
        case "update role":
                updateRole()
            break;
    
        default:
            break;
    };

};

async function updateRole() {
      // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employeedb'});
  // query database
  const [rows, fields] = await connection.execute("select * from employee");

  console.table(rows);
};