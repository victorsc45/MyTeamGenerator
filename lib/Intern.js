// Code to define and export the Intern class.  This class inherits from Employee.
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // returns Intern role
    getRole() {
        return "Intern";
    }
    // extends Employee class and returns constructor school for intern
    getSchool() {

        return this.school;
    }
}
module.exports = Intern;