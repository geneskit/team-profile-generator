const array = [];

//function to go through array and pull information to push into HTML
function employeeSort(data) {
    for (let count = 0; i < data.length; i++) {
        if (data[count].getRole() === 'Manager') {
            buildManager(data[count]);
        }
    }
}
// function to create manager card
function buildManager(info) {
    const managerCard = 
    `
    <div class ='row'>
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
}
// function to create engineer card

//function to create intern card

// function to generate outline of HTML
function generateHtml(employeeInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link rel="stylesheet" href="./dist/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark navbarHeight">
            <h1 class="text-light mx-auto">Team Profile Generator</h1>
        </nav>
        <div class = 'container'>
        </div>
    </body>
    </html>
    `
} 