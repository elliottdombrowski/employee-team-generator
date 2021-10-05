const Employee = require('./Employee');

//MANAGER CLASS EXTENDS EMPLOYEE CLASS
class Manager extends Employee {
    constructor(name, id, email, office) {

        //SUPER INCLUDES ALL PARAMETERS FROM EMPLOYEE CLASS
        super(name, id, email);

        //RETURNS MANAGER'S OFFICE NUMBER ON INPUT
        this.office = office;

        //RETURNS ROLE AS MANAGER
        this.role = "Manager";
    };

    getOffice() {
        return this.office
    };
};

module.exports = Manager;