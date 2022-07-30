const inquirer = require('inquirer');
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name) {
        super(name)

        this.school = school;
    }

    getSchool() {
        return `${this.school}`
    }
}

module.exports = Intern;