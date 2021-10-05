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

//DEFINES TEAM ARRAY AS EMPTY
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
        //WHEN ALL PROMPTS ANSWERED, PUSH INPUT DATA TO TEAM
        team.push(new Manager(emp.name, emp.id, emp.email, emp.office));
        //team.push(mgr);
        console.log("info: " + JSON.stringify(emp));

        //IF USER SELECTS TO ADD NEW ENGINEER OR INTERN, CALL RESPECTIVE FUNCTION
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
        //WHEN ALL PROMPTS ANSWERED, PUSH INPUT DATA TO TEAM 
        team.push(new Engineer(emp.name, emp.id, emp.email, emp.username));

        //IF USER SELECTS TO ADD NEW ENGINEER OR INTERN, CALL RESPECTIVE FUNCTION
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
        //WHEN ALL PROMPTS ANSWERED, PUSH INPUT DATA TO TEAM
        team.push(new Intern(emp.name, emp.id, emp.email, emp.school));

        //IF USER SELECTS TO ADD NEW ENGINEER OR INTERN, CALL RESPECTIVE FUNCTION
        if (emp.another === "Engineer") {
            promptEngineer();
        } else if (emp.another === "Intern") {
            promptIntern();
        } else if (emp.another === "No") {
            writeHtml();
        }

    })
}

//IF USER INPUT = "NO" WHEN ADDING ANOTHER TEAMMATE, CALL WRITEHTML TO GENERATE PAGE
function writeHtml() {
    fs.writeFile('team.html', Html.createHtml(team), function (err) {
        if (err) return console.log(err);
    });
}

// INPUT VALIDATION

//CHECKS THAT "ID" / "OFFICE NUM" PROMPTS REJECT STRING INPUTS, ACCEPT NUM INPUTS
const confirmNum = async (input) => {
    //PARSES USER INPUT TO NUM, RETURNS TRUE IF NUM
    if (parseInt(input)) {
        return true;
    }
    //ELSE, RETURNS PROMPT TO INPUT NUM
    return 'Please Input a Number.';
};

//CHECKS THAT EMAIL PROMPT REJECTS INPUT NOT INCLUDING "@" CHARACTER
const confirmEmail = async (input) => {
    //IF INPUT STRING INCLUDES "@" CHARACTER, RETURN TRUE
    if (input.includes("@")) {
        return true;
    }
    //ELSE RETURN INVALID
    return 'Not a Valid Email.';
}
    
//Called on initialization
promptManager();
