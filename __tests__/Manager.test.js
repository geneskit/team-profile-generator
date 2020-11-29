const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Set officeNo by constructor", () => {
    const testOfficeNo = 21;
    const testManager = new Manager('Emily', 21, 'notreal@email.com', testOfficeNo);

    expect(testManager.officeNo).toBe(testOfficeNo);
});
// Refine the following code for Manager test (C&P from Intern.test.js) 
// test("getSchool() test", () => {
//     const testSchool = 'University of Arizona';
//     const testManager = new Manager('Emily', 21, 'notreal@email.com', testSchool);

//     expect(testManager.getSchool()).toBe(testSchool);
// });

// test("getRole() returns Manager", () => {
//     const testRole = 'Manager';
//     const testObj = new Manager('Emily', 21, 'notreal@email.com', 'geneskit');

//     expect(testObj.getRole()).toBe(testRole);
// });