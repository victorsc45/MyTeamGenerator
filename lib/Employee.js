// TODO: Write code to define and export the Employee class
require("inquirer");
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id.getId([]);
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        let empId = this.id.Math.floor((Math.random() * 100) + 1);

        var valueArr = empId.map(function (item) { return item.id });
        var isDuplicate = valueArr.some(function (item, idx) {
            return valueArr.indexOf(item) != idx
        });
        if (isDuplicate === true) {
            this.getId();

        }
        return id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee, id;