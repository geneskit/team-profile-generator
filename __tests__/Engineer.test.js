const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Able to set GitHub via constructor", () => {
    const testGitHub = 'geneskit';
    const testObj = new Engineer('Emily', 21, 'notreal@email.com', testGitHub);

    expect(testObj.github).toBe(testGitHub);
});

test("getRole() returns Engineer", () => {
    const testRole = 'Engineer';
    const testObj = new Engineer('Emily', 21, 'notreal@email.com', 'geneskit');

    expect(testObj.getRole()).toBe(testRole);
});