const Employee = require('./Employee');

//INTERN CLASS EXTENDS PARENT EMPLOYEE CLASS
class Intern extends Employee {
    constructor(name, id, email, school) {

        //SUPER INCLUDES ALL PARAMETERS FROM EMPLOYEE CLASS
        super(name, id, email);

        //RETURNS INTERN'S SCHOOL BASED OFF USER INPUT
        this.school = school;

        //RETURNS ROLE AS INTERN
        this.role = "Intern";
    };

    getSchool() {
        return this.school
    };
}

module.exports = Intern;