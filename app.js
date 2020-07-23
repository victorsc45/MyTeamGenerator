const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//const util = require("util");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

// const allnumeric = async (id) => {
//     var nums = /^[0-9]+$/;
//     if (id.value.match(nums)) {
//         console.log('Your Employee number has accepted....');

//         return true;
//     }
//     else {
//         console.log('Please input numeric characters only');

//         return false;
//     }
// }
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//const writeFileAsync = util.promisify(fs.writeFile);

// function call to initialize program
promptUser();
// array of questions for user using inquirer node module functionality of inquirer to prompt user

async function promptUser() {
    try {
        console.log("Welcome to the CLI Team Generator add your team members here!");
        const { name } = await inquirer.prompt({
            type: "input",
            name: "name",
            message: "Please enter the employee name here:"
        });
        const { id } = await inquirer.prompt({
            type: "input",
            name: "id",
            message: "Please enter employee id whole numbers only:",
            // validate: function (id) {
            //     let nums = /^[0-9]+$/;
            //     if (id.value.match(nums)) {
            //         console.log('Your Employee number has accepted....');

            //         return true;
            //     }
            //     else {
            //         console.log('Please input numeric characters only');

            //         return false;
            //     }
            // }
        });

        const { email } = await inquirer.prompt({
            type: "input",
            name: "email",
            message: "Please enter employee's email",
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
        const { role } = await inquirer.prompt({
            type: "list",
            name: "role",
            message: "Select which part of the team this employee is on:",
            choices: [
                "Engineer",
                "Intern",
                "Manager"],

        });



        const { empSpecEng } = await inquirer.prompt({
            type: "input",
            name: "empSpecEng",
            message: "As an engineer enter the Github username:",
            when: (answers) => role === "Engineer",
        })

        let github = empSpecEng;
        teamMembers.push(new Engineer(name, id, email, github));
        console.log("engineer is working");



        const { empSpecIntrn } = await inquirer.prompt({
            type: "input",
            name: "empSpecIntrn",
            message: "As an Intern enter the school this employee is representing:",
            when: (answers) => role === "Intern",

        })

        let school = empSpecIntrn;
        teamMembers.push(new Intern(name, id, email, school));
        console.log("intern is working");

        const { empSpecMngr } = await inquirer.prompt({
            type: "input",
            name: "empSpecMngr",
            message: "Enter Manager's office space number:",
            when: (answers) => role === "Manager",
        })

        let officeNumber = empSpecMngr;
        teamMembers.push(new Manager(name, id, email, officeNumber));
        console.log("manager is working");



        const { addTeamMember } = await inquirer.prompt({
            type: "confirm",
            message: "Add another Team Member?",
            default: "y/n",
            name: "addTeamMember",

        })
        if (addTeamMember === "Y") {
            console.log("Successfully input employee / add new member now:");
            promptUser();
        } else {
            console.log("addtoteamFalse", addTeamMember);
            console.log("team:", teamMembers);
            //  const html = render(teamMembers);
            // fs.writeFileSync(outputPath, html, "utf8");
            return;
        }





    } catch (err) {
        console.log(err);
    }
}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
