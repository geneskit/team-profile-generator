const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Set school by constructor", () => {
    const testSchool = 'University of Arizona';
    const testIntern = new Intern('Emily', 21, 'notreal@email.com', testSchool);

    expect(testIntern.school).toBe(testSchool);
});

test("getSchool() test", () => {
    const testSchool = 'University of Arizona';
    const testIntern = new Intern('Emily', 21, 'notreal@email.com', testSchool);

    expect(testIntern.getSchool()).toBe(testSchool);
});

test("getRole() returns Intern", () => {
    const testRole = 'Intern';
    const testObj = new Intern('Emily', 21, 'notreal@email.com', 'geneskit');

    expect(testObj.getRole()).toBe(testRole);
});