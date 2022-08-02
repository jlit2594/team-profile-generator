// const employees = require('./index');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamBuilder = employeeData => {
    const { role, name, id, email, github, office, school} = employeeData;
    if (role === 'Engineer') {
        return `
        <div>
            <h1>${name}</h1>
            <h2>${role}</h2>
            <h3>${id}</h3>
            <div>
                <h3>${email} | ${github}</h3>
            </div>
        <div> 
        `
    } else if (role === 'Manager') {
        return `
        <div>
            <h1>${name}</h1>
            <h2>${role}</h2>
            <h3>${id}</h3>
            <div>
                <h3>${email} | ${office}</h3>
            </div>
        <div> 
        `       
    } else if (role === 'Intern') {
        return `
        <div>
            <h1>${name}</h1>
            <h2>${role}</h2>
            <h3>${id}</h3>
            <div>
                <h3>${email} | ${school}</h3>
            </div>
        <div> 
        `
    };
};

const buildSite = employees => {
       return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equi="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=decvice-width, initial-scale=1.0">
        <title>Our Team</title>
    </head>
    <body>
        ${employees.forEach( Engineer, Intern, Manager  => {
            return teamBuilder();
        })}
    </body>
    </html>
    `     
}
 
    
module.exports = buildSite;