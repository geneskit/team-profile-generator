const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeData = [];

init();

// start generator
function init () {
    promptManager();
};
// prompt manager for questions
function promptManager () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: 'What is your name?',
            validate: managerNameInput => 
            {
                if (managerNameInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your name! ');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'idNumber',
            message: 'What is your ID number?',
            validate: managerIdInput => 
            {
                if (managerIdInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your ID number! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: managerEmailInput => 
            {
                if (managerEmailInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your email address! ');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'email',
            message: 'What is your office number?',
            validate: managerOfficeNo => 
            {
                if (managerOfficeNo) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your office number! ');
                    return false;
                }
            }
        },
// Figure out how to set up the loop: Would you like to add another team member?
        // yes -> Which team member would you like to add? (Engineer or Intern)
        // no -> Finish creating the HTML
        {
            type: 'list',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            choices: [
                'yes',
                'no'
            ],
            
            if (confirmAdd) {
                addTeamMember();
            }
            // figure out the else function
        },
// Do I need to add all the answers into an array?
        
    ]);
};

// ask to add another employee (engineer or intern) or to finish building team
function addTeamMember () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'nextEmployeeRole',
            message: 'What is the role of the next team member?',
            choices: [
                'Engineer',
                'Intern',
                'I do not want to continue.'
            ],
            validate: nextEmployeeRole => 
            {
                if (nextEmployeeRole === 'Engineer') 
                {
                    addEngineer();
                    return true;
                }
                else if (nextEmployeeRole === 'Intern') {
                    addIntern();
                    return true;
                }
                else if (nextEmployeeRole === 'I do not want to continue.') {
                    // add code to finish building the html
                    return true;
                }
                else 
                {
                    console.log('Please enter a valid response! ');
                    return false;
                }
            }
        }
    ])
    
};

// engineer questions
function addEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: 'What is your name?',
            validate: managerNameInput => 
            {
                if (managerNameInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your name! ');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'idNumber',
            message: 'What is your ID number?',
            validate: managerIdInput => 
            {
                if (managerIdInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your ID number! ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: managerEmailInput => 
            {
                if (managerEmailInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your email address! ');
                    return false;
                }
            }
        },
    ])
}

// intern questions
function addIntern () {
    
}

// begin building html
