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