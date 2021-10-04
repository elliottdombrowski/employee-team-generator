const { expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test('checking for manager to return office number as num', () => {
    
    let intern = new Intern("eli", 123, "eli@test.com", "somewhere");

    expect(intern).toBeInstanceOf(Intern);
    expect(intern).toBeInstanceOf(Employee);
    expect(intern.getName()).toBe("eli");
    expect(typeof intern.getName()).toBe("string");

    // TEST IF EMPLOYEE ID IS NUMBER
    expect(intern.getId()).toBe(123);
    expect(typeof intern.getId()).toBe("number");

    // TEST IF EMPLOYEE EMAIL IS EMAIL
    expect(intern.getEmail()).toBe("eli@test.com");
    expect(typeof intern.getEmail()).toBe("string");
    expect(intern.getEmail()).toMatch("@");
    expect(intern.checkValidEmail()).toBe(true);

    intern.setEmail("bademail");
    expect(intern.getEmail()).not.toMatch("@");
    expect(intern.checkValidEmail()).toBe(false);

    // TEST IF OFFICE NUMBER IS NUM
    expect(typeof intern.getSchool()).toBe("string");

    // TEST FOR ROLE
    expect(intern.getRole()).toBe("Intern");
});