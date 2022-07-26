const inquirer = require("inquirer");
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.github = this.getGitHub();
    }

    getGitHub() {
        return inquirer
        .prompt({
            type: 'input',
            name: 'github',
            message: `Please enter ${name}'s GitHub username.`
        })
        .then(({ github }) => {
            this.github = github;
        })
    };
};

module.exports = Engineer;