const { expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");



test('checking deck generation', () => {
    let cards = [];

    expect(cards.length).toBe(0);
});