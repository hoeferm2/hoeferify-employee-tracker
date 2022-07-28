const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const table = require('console.table')

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// let currentDepartments = 

const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: 'password',
        database: 'tracker_db'
    },
    console.log(`.`)
);

db.query('SELECT * FROM departments', function (err, results) {
    console.log(results);
});

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
            console.log(result);
        });
        start()
    })
}
const deleteDepartment = () => {


    inquirer.prompt([
        {
            type: 'Input',
            message: "Which department is getting reorganized?",
            name: 'departmentDeleteName',
        },


    ]).then(ans => {
        db.query(`DELETE FROM departments WHERE department_name = ?`, ans.departmentDeleteName, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
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


    ]).then(ans => {

        db.query("INSERT INTO roles(title) VALUES(?)", ans.roleTitle, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
        start()
    })
}
const deleteRole = () => {


    inquirer.prompt([
        {
            type: 'Input',
            message: "Which role is getting axed?",
            name: 'roleDeleteTitle',
        },


    ]).then(ans => {
        db.query(`DELETE FROM roles WHERE title = ?`, ans.roleDeleteTitle, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
        start()
    })
}
const addEmployee = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "What employee would you like to add?",
            name: 'employeeLastName',
        },


    ]).then(ans => {

        db.query("INSERT INTO employees(title) VALUES(?)", ans.employeeLastName, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
        start()
    })
}
const deleteEmployee = () => {


    inquirer.prompt([
        {
            type: 'List',
            message: "Which employee is getting axed?",
            choices: (asdf),
            name: 'employeeDelete',
        },


    ]).then(ans => {
        db.query(`DELETE FROM employees WHERE last_name = ?`, ans.employeeDelete, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
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

