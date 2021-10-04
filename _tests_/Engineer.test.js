const { expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test('checking for manager to return office number as num', () => {
    
    let eng = new Engineer("eli", 123, "eli@test.com", "elliottdombrowski");

    expect(eng).toBeInstanceOf(Engineer);
    expect(eng).toBeInstanceOf(Employee);
    expect(eng.getName()).toBe("eli");
    expect(typeof eng.getName()).toBe("string");

    // TEST IF EMPLOYEE ID IS NUMBER
    expect(eng.getId()).toBe(123);
    expect(typeof eng.getId()).toBe("number");

    // TEST IF EMPLOYEE EMAIL IS EMAIL
    expect(eng.getEmail()).toBe("eli@test.com");
    expect(typeof eng.getEmail()).toBe("string");
    expect(eng.getEmail()).toMatch("@");
    expect(eng.checkValidEmail()).toBe(true);

    eng.setEmail("bademail");
    expect(eng.getEmail()).not.toMatch("@");
    expect(eng.checkValidEmail()).toBe(false);

    // TEST IF OFFICE NUMBER IS NUM
    expect(typeof eng.getUsername()).toBe("string");
});