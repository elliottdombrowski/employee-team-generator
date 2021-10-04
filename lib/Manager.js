const Employee = require('./Employee');

class Manager extends Employee {
    constructor(office) {

        super(name, id, email);
        this.office = office;
    };

    getOfficeNum() {
        return this.office
    };

    getRole() {
        return "Manager"
    };
};

module.exports = Manager;