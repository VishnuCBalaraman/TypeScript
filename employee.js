//Create an employee object with fields like id(unique),name,email,pwd.
var employee = /** @class */ (function () {
    function employee(id, name, email) {
        this.validateId(id);
        this.validateEmail(email);
        this.empId = id;
        this.empName = name;
        this.empEmail = email;
        employee.employeeIds.add(id);
    }
    employee.prototype.validateId = function (id) {
        if (employee.employeeIds.has(id)) {
            throw new Error("Employee ID ".concat(id, " already exists."));
        }
    };
    employee.prototype.validateEmail = function (email) {
        if (!email.includes('@gmail.com')) {
            throw new Error("Email ".concat(email, " must be a Gmail address."));
        }
    };
    employee.employeeIds = new Set();
    return employee;
}());
var emp1 = new employee(101, "Akhil", "akhil@gmail.com");
var emp2 = new employee(102, "Amal", "amal@gmail.com");
console.log(emp1);
console.log(emp2);
