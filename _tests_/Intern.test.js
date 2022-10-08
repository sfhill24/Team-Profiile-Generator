const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")

describe("Testing Intern Object", () => {

    test("can create new instance of Intern object", () => {
        const internObj = new Intern();
        expect(typeof (internObj)).toBe("object");
    });

    test("can set school of Intern Instance", () => {
        const internObj = new Intern("Bobby", 12, "bobby@company.net", "Clemson");
        expect(internObj.getSchool()).toBe("Clemson");
    });

    test("getRole method returns Object Instance intern field", () => {
        const internObj = new Intern("Bobby", 12, "bobby@company.net", "Clemson");
        expect(internObj.getRole()).toBe("Intern");
    })
})