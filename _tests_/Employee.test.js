const Employee = require("../lib/Employee")

describe("Testing Employee Object", () => {

    test("can create new instance of Employee object", () => {
        const employeeObj = new Employee();
        expect(typeof (employeeObj)).toBe("object");
    });

    test("can set name of Employee Instance", () => {
        const employeeObj = new Employee("Bobby");
        expect(employeeObj.name).toBe("Bobby");
    });

    test("can set id of Employee Instance", () => {
        const employeeObj = new Employee("Bobby", 12);
        expect(employeeObj.id).toBe(12);
    });

    test("can set email of Employee Instance", () => {
        const employeeObj = new Employee("Bobby", 12, "bobby@company.net");
        expect(employeeObj.email).toBe("bobby@company.net");
    });

    test("getName method returns Object Instance name field", () => {
        const employeeObj = new Employee("Bobby", 12, "bobby@company.net"); 
        expect(employeeObj.getName()).toBe("Bobby");
    })

    test("getId method returns Object Instance id field", () => {
        const employeeObj = new Employee("Bobby", 12, "bobby@company.net"); 
        expect(employeeObj.getId()).toBe(12);
    })

    test("getEmail method returns Object Instance email field", () => {
        const employeeObj = new Employee("Bobby", 12, "bobby@company.net"); 
        expect(employeeObj.getEmail()).toBe("bobby@company.net");
    })

    test("getRole method returns Object Instance employee field", () => {
        const employeeObj = new Employee("Bobby", 12, "bobby@company.net"); 
        expect(employeeObj.getRole()).toBe("Employee");
    })
})