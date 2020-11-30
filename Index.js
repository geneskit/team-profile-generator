const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeData = [];

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
        }
    ])
};
// ask to add another employee (engineer or intern) or to finish building team
function addTeamMember () {

};
// engineer questions
function addEngineer () {

}
// intern questions
function addIntern () {
    
}