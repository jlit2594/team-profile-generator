const inquirer = require('inquirer')

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.officeNum = getOffice();
    }

    getOffice() {
        return inquirer
        .prompt({
            type: 'input',
            name: 'office',
            message: `Please enter ${name}'s office number.`
        })
        .then(({ office }) => {
            this.officeNum = office;
        })
    }
}

module.exports = Manager;