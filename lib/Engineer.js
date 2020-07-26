// Code to define and export the Engineer class.  This class inherits from Employee.

const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // returns role of engineer
    getRole() {
        return "Engineer";
    }
    // extends Employee class and returns constructor github for engineer
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;