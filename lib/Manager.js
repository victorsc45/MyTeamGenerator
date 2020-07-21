// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        inquirer.prompt([{
            type: "input",
            name: "github",
            message: "Please add your GitHub username",

        }
        ])
        return this.officeNumber;
    }
}

module.exports = Manager;