let infoArray = [];

//function to go through array and pull information to push into HTML
function employeeSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].getRole() === 'Manager') {
            buildManager(array[i]);
        }
        else if (array[i].getRole() === 'Engineer') {
            buildEngineer(array[i]);
        }
        else {
            buildIntern(array[i]);
        }
    }
    return infoArray.join('');
}
// function to create manager card
function buildManager(object) {
    const managerCard = 
    `
    <div class ='col'>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <h6 class="card-subtitle mb-2 text-muted">${object.name}</h6>
            <p class="card-text">Employee ID: ${object.id}</p>
            <p class="card-text">Email Address: ${object.email}</p>
            <p class="card-text">Office Number: ${object.officeNo}</p>
        </div>
    </div>
    </div>
    `
    infoArray.push(managerCard);
}
// function to create engineer card
function buildEngineer(object) {
    const engineerCard = 
    `
    <div class ='col'>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <h6 class="card-subtitle mb-2 text-muted">${object.name}</h6>
            <p class="card-text">Employee ID: ${object.id}</p>
            <p class="card-text">Email Address: ${object.email}</p>
            <p class="card-text">GitHub Username: ${object.github}</p>
        </div>
    </div>
    </div>
    `
    infoArray.push(engineerCard);
}
//function to create intern card
function buildIntern(object) {
    const internCard = 
    `
    <div class ='col'>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <h6 class="card-subtitle mb-2 text-muted">${object.name}</h6>
            <p class="card-text">Employee ID: ${object.id}</p>
            <p class="card-text">Email Address: ${object.email}</p>
            <p class="card-text">Current School: ${object.school}</p>
        </div>
    </div>
    </div>
    `
    infoArray.push(internCard);
}
// function to generate outline of HTML
function generateHtml(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link rel="stylesheet" href="../dist/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark navbarHeight">
            <h1 class="text-light mx-auto">Team Profile Generator</h1>
        </nav>
        <div class = 'container marginTop'>
            <div class = 'row'>
                ${employeeSort(data)}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>
    `
} 

module.exports = generateHtml;