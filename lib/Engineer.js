// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {

        return this.github;
    }
}

module.exports = Engineer, github;