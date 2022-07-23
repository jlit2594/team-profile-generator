const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const newEmployee = function() {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'employeeConfirm',
                message: 'Would you like to add an employee?'
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: [
                    'Engineer', 'Intern', 'Manager', 'Other'
                ],
                when: ({ employeeConfirm }) => {
                    if (employeeConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }])
            .then(({ role }) => {
                this.employee = new Employee(role);
            });
};