//Including required packages 
const Inq = require('inquirer');
const fs = require('fs');

//Importing classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Html = require('./lib/HtmlGen');
const inquirer = require('inquirer');
const { throwStatement } = require('@babel/types');

let team = [];

//Fires off Manager prompts on init
function promptManager() {
    return inquirer.prompt(
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
                name: "office", 
                message: "Enter Manager Office Number",
            },
            {
                type: "list",
                name: "another", 
                message: "Add another team member? ",
                choices: [
                    "No",
                    "Engineer",
                    "Intern",
                ],
            },
        ],
    ).then(mgr => {
        team.push(mgr);
        console.log("info: " + JSON.stringify(mgr));

        if (mgr.another === "Engineer") {
            promptEngineer();
        } else if (mgr.another === "Intern") {
            promptIntern();
        } else if (mgr.another === "No") {
            writeHtml();
        }

    })
}

function promptEngineer() {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter Engineer Name",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Engineer ID",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer Email",
            },
            {
                type: "input",
                name: "office", 
                message: "Enter Engineer Github Username",
            },
            {
                type: "list",
                name: "another", 
                message: "Add another team member?",
                choices: [
                    "No",
                    "Engineer",
                    "Intern",
                ],
            },
        ],
    ).then(emp => {
        team.push(emp);
        console.log("info: " + JSON.stringify(emp));

        if (emp.another === "Engineer") {
            promptEngineer();
        } else if (emp.another === "Intern") {
            promptIntern();
        } else if (emp.another === "No") {
            writeHtml();
        }

    })
}

function promptIntern() {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter Intern Name",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Intern ID",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Intern Email",
            },
            {
                type: "input",
                name: "office", 
                message: "Enter Intern's School",
            },
            {
                type: "list",
                name: "another", 
                message: "Add another team member?",
                choices: [
                    "No",
                    "Engineer",
                    "Intern",
                ]
            },
        ]
    ).then(emp => {
        team.push(emp);
        console.log("info: " + JSON.stringify(emp));

        if (emp.another === "Engineer") {
            promptEngineer();
        } else if (emp.another === "Intern") {
            promptIntern();
        } else if (emp.another === "No") {
            writeHtml();
        }

    })
}

function writeHtml() {
    console.log("Full team: " + JSON.stringify(team));

    fs.writeFile('team.html', HtmlGen(createHtml(team)), function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
}
    
//Called on initialization
promptManager();
