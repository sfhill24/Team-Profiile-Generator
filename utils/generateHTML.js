const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function generateHTML(team) {

    let teamHTML = "";

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() == "Manager") {
            teamHTML += `<div class="card card-style" style="width: 18rem;">
                <div class="card-header">
                    <div>${team[i].name}</div>
                    <i class="fa-solid fa-mug-hot"></i>
                    Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID: ${team[i].id} </li>
                    <li class="list-group-item" id="email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item" id="officeNumber">Office Number: ${team[i].officeNumber}</li>
                </ul>
            </div >
        `
        }
        else if (team[i].getRole() == "Engineer") {
            teamHTML += `<div class="card card-style" style="width: 18rem;">
                <div class="card-header">
                    <div>${team[i].name}</div>
                    <i class="fa-solid fa-glasses"></i>
                    Engineer
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID:${team[i].id} </li>
                    <li class="list-group-item" id="email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item" id="github">GitHub: <a href="https://github.com/${team[i].gitHub}">${team[i].gitHub}</a></li>
                </ul>
            </div>
        `
        }
        else {
            teamHTML += `<div class="card card-style" style="width: 18rem;">
                <div class="card-header">
                    <div>${team[i].name}</div>
                    <i class="fa-solid fa-user-graduate"></i>
                    Intern
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID:${team[i].id} </li>
                    <li class="list-group-item" id="email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item" id="school">School: ${team[i].school}</li>
                </ul>
            </div>
        `
        }
    }

    const pageHtml = `<!doctype html>
    <html lang="en">
    
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/9bfb670082.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./dist/style.css">
    
      <title>Team Profile</title>
    </head>
    
    <body>
      <header class="header">
        <nav class="">
          <h1>My Team</h1>
        </nav>
      </header>
      <!--Employee Card Section-->
      <div class="container">
        <div class="row justify-content-center">
        ${teamHTML}  
        </div>
    </body>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </html>`

    return pageHtml;

}


module.exports = generateHTML;
