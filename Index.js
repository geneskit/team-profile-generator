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
            name: 'officeNo',
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
        {
            type: 'list',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            choices: [
                'yes',
                'no'
            ],
            
            // if (confirmAdd) {
            //     addTeamMember();
            // }
            
        },
        // Do I need to add all the answers into an array?    
    ])
    .then(answers => {
        //console.log(answers);

        if (answers.confirmAdd === 'yes') {
            addTeamMember(answers);
        }
        // figure out the else function
    })
};

// ask to add another employee (engineer or intern) or to finish building team
function addTeamMember (managerData) {
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
        }
    ])
    .then(answers =>{
        if (answers.nextEmployeeRole === 'Engineer') 
        {
            addEngineer(managerData);
        }
        else if (answers.nextEmployeeRole === 'Intern') {
            addIntern();
        }
        else if (answers.nextEmployeeRole === 'I do not want to continue.') {
            // add code to finish building the html
        }
    })
    
};

// engineer questions
function addEngineer (managerData) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: 'What is your name?',
            validate: engineerNameInput => 
            {
                if (engineerNameInput) 
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
            validate: engineerIdInput => 
            {
                if (engineerIdInput) 
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
            validate: engineerEmailInput => 
            {
                if (engineerEmailInput) 
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
    .then(answers => {
        console.log(answers);
        console.log(managerData);
    })
}

// intern questions
function addIntern () {
    console.log("Adding intern");
    
}

// begin building html
