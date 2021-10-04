const { expect, test } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test('checking for manager to return office number as num', () => {
    
    let manager = new Manager("eli", 123, "eli@test.com", 12);

    expect(manager).toBeInstanceOf(Manager);
    expect(manager).toBeInstanceOf(Employee);
    expect(manager.getName()).toBe("eli");
    expect(typeof manager.getName()).toBe("string");

    // TEST IF EMPLOYEE ID IS NUMBER
    expect(manager.getId()).toBe(123);
    expect(typeof manager.getId()).toBe("number");

    // TEST IF EMPLOYEE EMAIL IS EMAIL
    expect(manager.getEmail()).toBe("eli@test.com");
    expect(typeof manager.getEmail()).toBe("string");
    expect(manager.getEmail()).toMatch("@");
    expect(manager.checkValidEmail()).toBe(true);

    manager.setEmail("bademail");
    expect(manager.getEmail()).not.toMatch("@");
    expect(manager.checkValidEmail()).toBe(false);

    // TEST IF OFFICE NUMBER IS NUM
    expect(typeof manager.getOfficeNum()).toBe("number");

    // TEST FOR ROLE
    expect(manager.getRole()).toBe("Manager");
});