const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(username) {

        super(name, id, email);
        this.username = username;
    };

    getUsername() {
        return this.username
    };

    getRole() {
        return "Engineer"
    };
}

module.exports = Engineer;
