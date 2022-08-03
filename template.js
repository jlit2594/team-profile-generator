function teamBuilder(employees) {
    console.log(employees);
    // it only returns the first value unfortunately. not sure why.
    for (let i = 0; i < employees.length; i++) {
       return `
        <div>
            <h1>${employees[i].name}</h1>
            <h2>${employees[i].role}</h2>
            <h3>${employees[i].id}</h3>
            <div>
                <h3>${employees[i].email} | ${employees[i].github || employees[i].office || employees[i].school}</h3>
            </div>
        <div> 
        `
    };
};

// builds the html page
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
        ${teamBuilder(employees)}
    </body>
    </html>
    `     
}
 
    
module.exports = buildSite;