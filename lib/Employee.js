class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

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

    getRole() {
        return "Employee";
    }
    //Returns Employee

    checkValidEmail() {
        return this.email.match("@") != null;
    }
}

module.exports = Employee;
