const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

describe("Testing Manager Object", () => {

    test("can create new instance of Manager object", () => {
        const managerObj = new Manager();
        expect(typeof (managerObj)).toBe("object");
    });

    test("getRole method returns Object Instance manager field", () => {
        const managerObj = new Manager("Bobby", 12, "bobby@company.net", 5555555555);
        expect(managerObj.getRole()).toBe("Manager");
    })

    test("can set officeNumber of Manager Instance", () => {
        const managerObj = new Manager("Bobby", 12, "bobby@company.net", 5555555555);
        expect(managerObj.getOfficeNumber()).toBe(5555555555)
    });
})