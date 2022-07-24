const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const newEmployee = function(data) {
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
            name: 'email',
            message: "Please enter the employee's email address."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username",
            when: ({ role }) => {
                if (role === 'Engineer') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter the manager's office number.",
            when: ({ role }) => {
                if (role === 'Manager') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the name of the Intern's school.",
            when: ({ role }) => {
                if (role === 'Intern') {
                    return true;
                }
                return false;
            }
        }
    ])
    .then(({ role }) => {
        if (role === 'Engineer') {
            return new Engineer;

        } else if (role === 'Intern') {
            return new Intern;

        } else if (role === 'Manager') {
            return new Manager;
            
        }
    })

}

const initialize = function() {
    console.log(`
    ==============================
    WELCOME TO THE TEAM GENERATOR
    ==============================
    `)
    newEmployee();
}