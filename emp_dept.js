//Create a employee objects . Find out the employees by dept and their total salaries by dept.
var employees = /** @class */ (function () {
    function employees(id, name, salary, dpetId) {
        this.empDeptId = id;
        this.empName = name;
        this.empSalary = salary;
        this.empDeptId = dpetId;
    }
    return employees;
}());
var employeeManager = /** @class */ (function () {
    function employeeManager() {
        this.employeeList = [];
    }
    employeeManager.prototype.addEmployees = function (emp) {
        this.employeeList.push(emp);
    };
    employeeManager.prototype.getEmployeesByDeptId = function (dpetId) {
        return this.employeeList.filter(function (emp) { return emp.empDeptId == dpetId; });
    };
    employeeManager.prototype.getTotalSalaries = function (dpetId) {
        var employeesInDept = this.getEmployeesByDeptId(dpetId);
        return employeesInDept.reduce(function (total, emp) { return total + emp.empSalary; }, 0);
    };
    return employeeManager;
}());
var empManager = new employeeManager();
empManager.addEmployees(new employees(101, "Akhil", 45000, 501));
empManager.addEmployees(new employees(102, "Amal", 65000, 501));
empManager.addEmployees(new employees(103, "Rahul", 55000, 502));
empManager.addEmployees(new employees(104, "Hadin", 45000, 501));
empManager.addEmployees(new employees(105, "Nandan", 40000, 502));
console.log(empManager.getEmployeesByDeptId(501));
console.log(empManager.getTotalSalaries(501));
console.log(empManager.getEmployeesByDeptId(502));
console.log(empManager.getTotalSalaries(502));
