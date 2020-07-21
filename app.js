const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const writeFileAsync = util.promisify(fs.writeFile);

// function call to initialize program

init();

// function to initialize program

async function init() {
    console.log("welcome to the README.md file Generator");
    try {
        const answers = await promptUser();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("README.md", markDown);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}

// array of questions for user using inquirer node module functionality

// Prompts the user for a letter
askPosition() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "Select which part of the Team you are on!",
                choice: [
                    "Engineer",
                    "Intern",
                    "Manager",]
            },
            {
                type: "input",
                name: "name",
                message: "Please enter your name here."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email",
                default: () => { },
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        console.log("Great job");
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }

            },
        ])
        .then(val => {
            // The user's input is determined 
            const Employee = this.employee(val.choice);
            if (Employee === "Engineer") {
                getGitHub(github);

            } else if (Employee === "Intern") {
                getSchool();
            }
        });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
