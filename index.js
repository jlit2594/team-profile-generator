const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const buildSite = require('./template')

const employees = [];

const questionnaire = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee you're adding?"
        },
        {
            type: 'choices',
            name: 'role',
            message: 'Please pick a role for this employee',
            choices: [
                'Engineer', 'Manager', 'Intern'
            ]
        },
        {
            type: 'input',
            name: 'id',
            message: `Please type the employee's ID number.`
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter the employee's email address.`
        },
        {
            type: 'input',
            name: 'github',
            message: `Please enter the employee's GitHub username.`,
            when: (({ role }) => {
                if (role === 'Engineer') {
                    return true;
                }
                return false;
            })
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?',
            when: (({ role }) => {
                if (role === 'Intern') {
                    return true;
                }
                return false;
            })
        },
        {
            type: 'input',
            name: 'office',
            message: "What is this manager's office number?",
            when: (({ role }) => {
                if (role === 'Manager') {
                    return true;
                }
                return false;
            })
        }
    ])
    .then(results => {
        if (role === 'Engineer') {
            employees.push(new Engineer(results))
        } else if (role === 'Intern') {
            employees.push(new Intern(results))
        } else if (role === 'Manager') {
            employees.push(new Manager(results))
        }
    })
}

const initialize = function() {
    console.log(`
    ==============================
    WELCOME TO THE TEAM GENERATOR
    ==============================
    `)
    
    if (!employees) {
        questionnaire();
    } else if (employees) {
        return inquirer
        .prompt({
            type: 'confirm',
            name: 'employeeConfirm',
            message: 'Would you like to add another employee?',
            when: ({employeeConfirm}) => {
                if (employeeConfirm) {
                    questionnaire();
                } else {
                    buildSite(employees)
                }
            }
        });
    };
};

initialize();