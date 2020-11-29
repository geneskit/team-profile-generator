const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Set school by constructor", () => {
    const testSchool = 'University of Arizona';
    const testIntern = new Intern('Emily', 21, 'notreal@email.com', testSchool);

    expect(testIntern.school).toBe(testSchool);
});