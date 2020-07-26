// Code to define and export the Manager class. HINT: This class inherits from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // returns manager role
    getRole() {
        return "Manager";
    }
    // extends Employee class and returns constructor office number of manager
    getOfficeNumber() {

        return this.officeNumber;
    }
}

module.exports = Manager;