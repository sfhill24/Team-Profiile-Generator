const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./utils/generateHTML")

const team = [];

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manager's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's phone number."
        },

    ]);

}

//function to ask if another employee is to be added and/or generate team
function menuPrompt() {
    return inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No, generate team"]
    }])
        .then(userAnswer => {
            const { answer } = userAnswer;

            if (answer == "Yes") {
                promptEmployee()
                    .then(employeeInput => {
                        const { teamRole } = employeeInput;
                        if (teamRole == "Engineer") {
                            addEngineer()
                                .then(engineerInput => {
                                    const { name, id, email, gitHub } = engineerInput;
                                    const engineer = new Engineer(name, id, email, gitHub);
                                    team.push(engineer);
                                    console.log(engineer);
                                    menuPrompt();
                                })
                        }
                        else {
                            addIntern()
                                .then(internInput => {
                                    const { name, id, email, school } = internInput;
                                    const intern = new Intern(name, id, email, school);
                                    team.push(intern);
                                    console.log(intern);
                                    menuPrompt();
                                })
                        }
                    })

            }
            else {
           
               const teamProfilePage = generateHTML(team);
                writeToFile("TeamProfile.html", teamProfilePage);
                
            }
        
    })

}

//function to add an employee
function promptEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: "teamRole",
            message: "Please select the role of the employee you'd like to add.",
            choices: ["Engineer", "Intern"]
        },
    ])
}
//funtion to add engineer
function addEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email address."
        },
        {
            type: "input",
            name: "gitHub",
            message: "Please enter the engineer's gitHub username."
        },
    ])

}

//function to add intern
function addIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email address."
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the school that the intern is attending."
        }
    ])
}

function init() {
    promptManager()
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            team.push(manager);
            console.log(manager);

            menuPrompt()
        })
}

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.log(err)
            }
            console.log("Your Team Profile has been successfully created!")
        })
    }
    

init();