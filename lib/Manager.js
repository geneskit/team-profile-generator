const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super (name, id, email);
        this.role = 'Manager'
        this.officeNo = officeNo;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;