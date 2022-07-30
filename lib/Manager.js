const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.officeNum = office;
    }

    getOffice() {
        return `${this.officeNum}`
    }
}

module.exports = Manager;