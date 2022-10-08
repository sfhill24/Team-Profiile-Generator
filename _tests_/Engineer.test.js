const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

describe("Testing Engineer Object", () => {

    test("can create new instance of Engineer object", () => {
        const engineerObj = new Engineer();
        expect(typeof (engineerObj)).toBe("object");
    });

    test("can set github of Engineer Instance", () => {
        const engineerObj = new Engineer("Bobby", 12, "bobby@company.net", "bobbyGithub");
        expect(engineerObj.getGitHub()).toBe("bobbyGithub");
    });

    test("getRole method returns Object Instance engineer field", () => {
        const engineerObj = new Engineer("Bobby", 12, "bobby@company.net", "bobbyGitHub");
        expect(engineerObj.getRole()).toBe("Engineer");
    })
})