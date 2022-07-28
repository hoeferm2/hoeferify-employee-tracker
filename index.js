const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

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

// Query database
// db.query('SELECT * FROM departments', function (err, results) {
//     console.log(results);
// });


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
                // case "Add Role":
                //     addIntern()
                //     break;
                // case "Delete Role":
                //     addEngineer()
                //     break;
                // case "Add Employee":
                //     addEngineer()
                //     break;
                // case "Delete Employee":
                //     addEngineer()
                //     break;
                // case "Close Application":
                //     finish()
                //     break;
                default:
                    console.log("thanks for using our software!")
                    break;

            }
        })
}


const addDepartment = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "What is the new Department called?",
            name: 'departmentName',
        },


    ]).then(ans => {
        db.query("INSERT INTO departments WHERE department_name VALUE?", ans.departmentName, (err, result) => {
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
start()

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

