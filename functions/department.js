const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');


const addDepartment = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "What is the new Department called?",
            name: 'departmentName',
        },


    ]).then(ans => {
        let manager = new Manager(ans.departmentName,)
        console.log(`Added  ${ans.departmentName}`)
        team.push(manager)

        start()
    })
}

const deleteDepartment = () => {

    inquirer.prompt([
        {
            type: 'List',
            message: "Which department is getting reorganized?",
            name: 'departmentDeleteName',
        },


    ]).then(ans => {
        let manager = new Manager(ans.departmentDeleteName,)
        console.log(`Added  ${ans.departmentDeleteName}`)

        start()
    })
}

