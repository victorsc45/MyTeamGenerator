// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        inquirer.prompt([{
            type: "input",
            name: "school",
            message: "Please provide your school name:",

        }
        ])
        return this.school;
    }
}
module.exports = Intern;