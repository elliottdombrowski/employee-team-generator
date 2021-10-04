const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {

        super(name, id, email);
        this.office = office;
        this.role = "Manager";
    };

    getOfficeNum() {
        return this.office
    };
};

module.exports = Manager;