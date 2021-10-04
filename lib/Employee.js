class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
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
        return this.role;
    }
    //Returns Employee

    checkValidEmail() {
        return this.email.match("@") != null;
    }
}

module.exports = Employee;
