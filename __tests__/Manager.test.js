const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Set officeNo by constructor", () => {
    const testOfficeNo = 21;
    const testManager = new Manager('Emily', 21, 'notreal@email.com', testOfficeNo);

    expect(testManager.officeNo).toBe(testOfficeNo);
});

test("getRole() should return Manager", () => {
    const testRole = 'Manager';
    const testManager = new Manager('Emily', 21, 'notreal@email.com');

    expect(testManager.getRole()).toBe(testRole);
}); 