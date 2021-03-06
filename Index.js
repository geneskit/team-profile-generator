const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHtml = require('./lib/generateHtml')
const DIRECTORY_PATH = path.resolve(__dirname, 'dist');
const dist = path.join(DIRECTORY_PATH, 'htmlPage.html')

const employeeData = [];

init();

// start generator
function init () {
    promptManager();
};

// prompt manager for questions
function promptManager () {
    return inquirer.prompt([
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
            message: 'What is your ID number? ',
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
            message: 'What is your office number? ',
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
        },    
    ])
    .then(answers => {
        if (answers.confirmAdd === 'yes') {
            const manager = new Manager(answers.nameInput, answers.idNumber, answers.email, answers.officeNo);
            employeeData.push(manager);
            return addTeamMember();
        }
        else {
            return writeToFile();
        }
    })
};

// ask to add another employee (engineer or intern) or to finish building team
function addTeamMember () {
    return inquirer.prompt([
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
            return addEngineer();
        }
        else if (answers.nextEmployeeRole === 'Intern') {
            return addIntern();
        }
        else {
            return writeToFile();
        }
    })
};

// engineer questions
function addEngineer (managerData) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: 'What is your name? ',
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
            message: 'What is your ID number? ',
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
            message: 'What is your email address? ',
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
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? ',
            validate: github => 
            {
                if (github) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your GitHub username! ');
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.nameInput, answers.idNumber, answers.email, answers.github);
        employeeData.push(engineer);
        return addTeamMember();
    })
}

// intern questions
function addIntern () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: 'What is your name? ',
            validate: internNameInput => 
            {
                if (internNameInput) 
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
            message: 'What is your ID number? ',
            validate: internIdInput => 
            {
                if (internIdInput) 
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
            message: 'What is your email address? ',
            validate: internEmailInput => 
            {
                if (internEmailInput) 
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
            type: 'input',
            name: 'school',
            message: 'What school are you currently attending? ',
            validate: internSchool => 
            {
                if (internSchool) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your school! ');
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.nameInput, answers.idNumber, answers.email, answers.school);
        employeeData.push(intern);
        return addTeamMember();
    })
}

function writeToFile (fileName, data) {
    fs.writeFileSync(dist, generateHtml(employeeData), 'utf-8')
}

