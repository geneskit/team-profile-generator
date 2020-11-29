const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("test Employee object should return testName, testId and testEmail", () => {
    const testName = 'Emily';
    const testId = 21;
    const testEmail = 'notreal@email.com';

    const test = new Employee('Emily', 21, 'notreal@email.com');

    expect(test.name).toBe(testName);
    expect(test.id).toBe(testId);
    expect(test.email).toBe(testEmail);
})