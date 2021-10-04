//Including required packages 
const Inq = require('inquirer');
const fs = require('fs');

//Importing classes
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { throwStatement } = require('@babel/types');

//Fires off Manager prompts on init
function promptManager() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter Manager Name",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Manager ID",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Manager Email",
            },
            {
                type: "input",
                name: "email", 
                message: "Enter Manager Office Number",
            },
            {
                type: "input",
                name: "email", 
                message: "Add another team member?",
                choices: [
                    "Engineer",
                    "Intern",
                ]
            }
        ]
    )
}
    
    //Called on initialization
    promptManager()
    // {
    //     type: "input",
    //     name: "officenumber",
    //     message: "Enter Manager Office Number",
    // },