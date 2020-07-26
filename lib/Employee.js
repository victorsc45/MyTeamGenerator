// Code to define and export the Employee class
require("inquirer");
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // name basic constructor of employee
    getName() {
        return this.name;
    }
    // id basic constructor of employee
    getId() {
        return this.id;
    }
    // email basic constructor of employee
    getEmail() {
        return this.email;
    }
    // returns role employee 
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;