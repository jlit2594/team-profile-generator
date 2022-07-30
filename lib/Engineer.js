const inquirer = require("inquirer");
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.github = github;
    }

    getGitHub() {
        return `${this.github}`
    }
};

module.exports = Engineer;