const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name) {
        super(name)

        this.school = this.getSchool();
    }

    getSchool() {
        return inquirer
        .prompt({
            type: 'input',
            name: 'school',
            message: `What is the school that ${name} attends?`
        })
        .then(({ school }) => {
            this.school = school;
        })
    }
}

module.exports = Intern;