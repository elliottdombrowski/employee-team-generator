const { expect } = require("@jest/globals");
const { describe } = require("yargs");

const Html = require('../lib/HtmlGen');
const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");

test('html string creation', () => {
    
    let team = [
        new Manager('Cool Guy', 123, 'manager@test.com', 666),
        new Engineer('Tech Guy', 111, 'eng@test.com', 'techguy777')
    ]

    expect(Html.createHtml(team)).toBe("hello world");
});