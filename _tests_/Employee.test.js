const { expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");


// TEST IF EMPLOYEE NAME IS STRING
test('checking employee constructor and getters', () => {

    let emp = new Employee("eli", 123, "eli@test.com");

    expect(emp).toBeInstanceOf(Employee);
    expect(emp.getName()).toBe("eli");
    expect(typeof emp.getName()).toBe("string");

    // TEST IF EMPLOYEE ID IS NUMBER
    expect(emp.getId()).toBe(123);
    expect(typeof emp.getId()).toBe("number");

    // TEST IF EMPLOYEE EMAIL IS EMAIL???
    expect(emp.getEmail()).toBe("eli@test.com");
    expect(typeof emp.getEmail()).toBe("string");
    expect(emp.getEmail()).toMatch("@");
    expect(emp.checkValidEmail()).toBe(true);

    emp.setEmail("bademail");
    expect(emp.getEmail()).not.toMatch("@");
    expect(emp.checkValidEmail()).toBe(false);

    // TEST FOR ROLE
    expect(emp.getRole()).toBe("Employee");
});


