const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: 'password',
        database: 'tracker_db'
    },
    console.log(`.`)
);


const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ["Add Department", "Delete Department", "Add Role", "Delete Role", "Add Employee", "Delete Employee", "Close Application"],
            message: 'Hello what would you like to do?',
            name: 'selection'
        }]).then(ans => {
            switch (ans.selection) {

                case "Add Department":
                    addDepartment()
                    break;
                case "Delete Department":
                    deleteDepartment()
                    break;
                case "Add Role":
                    addRole()
                    break;
                case "Delete Role":
                    deleteRole()
                    break;
                case "Add Employee":
                    addEmployee()
                    break;
                case "Delete Employee":
                    deleteEmployee()
                    break;
                case "Close Application":
                    finish()
                    break;
                default:
                    console.log("thanks for using our software!")
                    break;

            }
        })
}

//THIS WORKS FOR INSERT
const addDepartment = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "What is the new Department called?",
            name: 'departmentName',
        },


    ]).then(ans => {

        db.query("INSERT INTO departments(department_name) VALUES(?)", ans.departmentName, (err, result) => {
            if (err) {
                console.log(err);
            }
        });
        db.query('SELECT * FROM departments', function (err, results) {
        });
        start()
    })
}

const addRole = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "What role would you like to add?",
            name: 'roleTitle',
        },
        {
            type: 'Input',
            message: "How much do they make??",
            name: 'roleSalary',
        },


    ]).then(ans => {

        db.query("INSERT INTO roles(title,salary) VALUES(?)", [ans.roleTitle, ans.roleSalary], (err, result) => {
            if (err) {
                console.log(err);
            }
        });


        db.query('SELECT * FROM roles', function (err, results) {
            console.log(results);
        });
        start()
    })
}

const addEmployee = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "What is the employees first name?",
            name: 'employeeFirstName',
        },
        {
            type: 'Input',
            message: "What is the employees last name??",
            name: 'employeeLastName',
        },
        {
            type: 'Input',
            message: "What employee would you like to add?",
            name: 'employeeTitle',
        },
        {
            type: 'Input',
            message: "What employee would you like to add?",
            name: 'employeeLastName',
        },


    ]).then(ans => {

        db.query("INSERT INTO employees(title) VALUES(?)", ans.employeeLastName, (err, result) => {
            if (err) {
                console.log(err);
            };
        });
        db.query('SELECT * FROM roles', function (err, results) {
            console.log(results);
        });
        start()
    })
}

start()

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

