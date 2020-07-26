// required libs and node packages

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// output directory and final html team view

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// array to store created team member json objects

const employees = [];
let oneMngr = 0;
// function call to initialize program

promptUser();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function promptUser() {
    try {
        console.log("Welcome to the CLI Team Generator add your team members here!");

        // create name of each employee

        const { name } = await inquirer.prompt({
            type: "input",
            name: "name",
            message: "Employee's name:  "
        });

        // create id for each employee validate as whole number

        const { id } = await inquirer.prompt({
            type: "input",
            name: "id",
            message: "Employee's ID:  ",
            validate: function (id) {
                const idValid = /^[0-9]+$/.test(id)
                if (idValid) {
                    console.log("      Awesome, Thanks")
                    return true;
                }
                else {
                    console.log(".  Please enter a new id; not a valid whole number")
                    return false;
                }
            }
        });

        // create email for each employee validate as email type

        const { email } = await inquirer.prompt({
            type: "input",
            name: "email",
            message: "Employee's email:  ",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    console.log("     Great, Thanks!");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        });

        // select role of employee being entered on CLI 

        const { role } = await inquirer.prompt({
            type: "list",
            name: "role",
            message: "Select which part of the team this employee is on:",
            choices: [
                "Engineer",
                "Intern",
                "Manager"],

        });

        // unique identifier input for Engineer members based on answer of role prompt using when: conditional

        const { empSpecEng } = await inquirer.prompt({
            type: "input",
            name: "empSpecEng",
            message: "As an engineer enter the Github username:",
            when: (answers) => role === "Engineer",
        })

        // unique identifier input for Inter members based on answer of role prompt using when: conditional

        const { empSpecIntrn } = await inquirer.prompt({
            type: "input",
            name: "empSpecIntrn",
            message: "As an Intern enter the school this employee is representing:",
            when: (answers) => role === "Intern",

        })

        // unique identifier input for Manager members based on answer of role prompt using when: conditional

        const { empSpecMngr } = await inquirer.prompt({
            type: "input",
            name: "empSpecMngr",
            message: "Enter Manager's office space number:",
            when: (answers) => role === "Manager",
        })

        // switch case used to push Engineer, Intern, and Manager json object to employees array

        switch (role) {
            case "Engineer":
                let github = empSpecEng;
                employees.push(new Engineer(name, id, email, github));
                console.log("engineer is working");
                console.log("engineer", employees);
                break;
            case "Intern":
                let school = empSpecIntrn;
                employees.push(new Intern(name, id, email, school));
                console.log("intern is working");
                console.log("intern", employees);
                break;
            case "Manager":
                if (oneMngr < 1) {
                    let officeNumber = empSpecMngr;
                    employees.push(new Manager(name, id, email, officeNumber));
                    console.log("Manager is working");
                    oneMngr++;
                    console.log("manager", employees);
                } else {
                    console.log("Only enter one manager for this project; sorry.");
                }
                break;
        }

        // inquirer if there are any more employee enteries at this time 

        const { addTeamMember } = await inquirer.prompt({
            type: "list",
            message: "Add another Team Member?",
            name: "addTeamMember",
            choices: ["Yes", "No"],
        })

        // if the user wants to add another team member the switch returns to promptUser function
        // else it checks for an output directory...
        // returned from the `render` function. Now write it to a file named `team.html` in the output folder

        let addMem = addTeamMember;
        switch (addMem) {
            case "Yes":
                promptUser();
                break;
            case "No":
                if (!fs.existsSync(OUTPUT_DIR)) { fs.mkdirSync(OUTPUT_DIR) };
                fs.writeFileSync(outputPath, render(employees), "utf8");
                console.log("html", outputPath);
                break;
        }
    } catch (err) {
        console.log(err); // log error if try does not complete
    }
}





