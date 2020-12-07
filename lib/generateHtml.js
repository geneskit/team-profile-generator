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
            <div class = row>
                ${employeeSort(employeeInfo)}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>
    `
} 

module.exports = generateHtml;