const inquirer = require("inquirer")

class Employee {
    constructor() {
        this.role = getRole(),
        this.name = getName(),
        this.id = getId(),
        this.email = getEmail()
    }

    getRole() {
        return inquirer
        .prompt(
        {
            type: 'choices',
            name: 'role',
            message: 'Please pick a role for this employee',
            choices: [
                'Engineer', 'Manager', 'Intern'
            ]
        }
    )
    .then(({ role }) => {
        if (role === 'Engineer') {;
            this.employees.push(new Engineer(name));
        } else if (role === 'Manager') {
            this.employees.push(new Manager(name));
        } else if (role === 'Intern') {
            this.employees.push(new Intern(name))
        }
    })
    }

    getName() {
        return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: "What is the name of the employee you're adding?"
        })
        .then(({ name }) => {
            this.name = name;
        });
    }
    
    getID() {
        return inquirer
        .prompt({
            type: 'input',
            name: 'id',
            message: `Please type ${name}'s employee ID number.`
        })
        .then(({ id }) => {
            this.id = id;
        })
    }

    getEmail() {
        return inquirer
        .prompt({
            type: 'input',
            name: 'email',
            message: `Please enter ${name}'s email address.`
        })
        .then(({ email }) => {
            this.email = email;
        })
    }
}

module.exports = Employee;