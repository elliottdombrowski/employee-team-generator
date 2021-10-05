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
                validate: confirmNum
                // validate: (val) => {return typeof val === 'number'}
            },
            {
                type: "input",
                name: "email",
                message: "Enter Manager Email",
                validate: confirmEmail
            },
            {
                type: "input",
                name: "office", 
                message: "Enter Manager Office Number",
                validate: confirmNum
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
    ).then(emp => {
        team.push(new Manager(emp.name, emp.id, emp.email, emp.office));
        //team.push(mgr);
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
                validate: confirmNum
            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer Email",
                validate: confirmEmail
            },
            {
                type: "input",
                name: "username", 
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
        team.push(new Engineer(emp.name, emp.id, emp.email, emp.username));
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
                validate: confirmNum
            },
            {
                type: "input",
                name: "email",
                message: "Enter Intern Email",
                validate: confirmEmail
            },
            {
                type: "input",
                name: "school", 
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
        team.push(new Intern(emp.name, emp.id, emp.email, emp.school));
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

    fs.writeFile('team.html', Html.createHtml(team), function (err) {
        if (err) return console.log(err);
        console.log('Generated HTML > team.html');
    });
}

// INPUT VALIDATION
const confirmNum = async (input) => {
    if (parseInt(input)) {
        return true;
    }
    return 'Please Input a Number.';
};

const confirmEmail = async (input) => {
    if (input.includes("@")) {
        return true;
    }
    return 'Not a Valid Email.';
}
    
//Called on initialization
promptManager();
