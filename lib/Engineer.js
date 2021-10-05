const Employee = require('./Employee');

//ENGINEER CHILD CLASS EXTENDS EMPLOYEE PARENT CLASS
class Engineer extends Employee {
    constructor(name, id, email, username) {

        //SUPER INCLUDES ALL PARAMETERS FROM EMPLOYEE CLASS
        super(name, id, email);

        //RETURNS ENGINEER'S GITHUB USERNAME BASED ON INPUT
        this.username = username;

        //RETURNS ROLE AS ENGINEER
        this.role = "Engineer";
    };

    getUsername() {
        return this.username
    };
}

module.exports = Engineer;
