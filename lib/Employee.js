//CREATE EMPLOYEE CLASS AND CONSTRUCTOR FUNCTION
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    //RETURN NAME, ID, EMAIL, AND ROLE
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    setEmail(newEmail) {
        this.email = newEmail;
    }

    //RETURNS EMPLOYEE
    getRole() {
        return this.role;
    }

    checkValidEmail() {
        return this.email.match("@") != null;
    }
}

module.exports = Employee;
