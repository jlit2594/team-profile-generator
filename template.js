// const teamBuilder = teamData => {
//     const { name, role, id, email, github, office, school } = teamData;
//         for (let i = 0; i < teamData.length; i++) {
//            return `
//         <div>
//             <h1>${name[i]}</h1>
//             <h2>${role[i]}</h2>
//             <h3>${id[i]}</h3>
//             <div>
//                 <h3>${email[i]} | ${github[i]}</h3>
//             </div>
//             <h3>${office[i]}${school[i]}</h3>
//         <div> 
//         `   
//     }
// }

module.exports = teamArr => {
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
        ${teamArr.map(({ name, role, id, email, github, office, school}) => {
            for (let i = 0; i < teamArr.length; i++) {
                return `
             <div>
                 <h1>${name[i]}</h1>
                 <h2>${role[i]}</h2>
                 <h3>${id[i]}</h3>
                 <div>
                     <h3>${email[i]} | ${github[i]}</h3>
                 </div>
                 <h3>${office[i]}${school[i]}</h3>
             <div> 
             ` 
            }
        })}
    </body>
    </html>
    `
}