//Create a employee objects . Find out the employees by dept and their total salaries by dept.

class employees{
    empId: number;
    empName : string;
    empSalary: number;
    empDeptId: number;
    

    constructor(id: number, name : string,salary: number, dpetId : number){
        this.empDeptId=id;
        this.empName=name;
        this.empSalary=salary;
        this.empDeptId=dpetId;
    }
}

class employeeManager{
    employeeList : employees[];

    constructor(){
        this.employeeList=[];
    }

    addEmployees(emp: employees): void{
        this.employeeList.push(emp);
    }

    getEmployeesByDeptId(dpetId: number): employees[]{
        return this.employeeList.filter((emp)=>emp.empDeptId==dpetId);
    }

    getTotalSalaries(dpetId: number): number{
        const employeesInDept = this.getEmployeesByDeptId(dpetId);
        return employeesInDept.reduce((total,emp)=>total+emp.empSalary,0);
    }
}


const empManager = new employeeManager();

empManager.addEmployees(new employees(101,"Akhil",45000,501));
empManager.addEmployees(new employees(102,"Amal",65000,501));
empManager.addEmployees(new employees(103,"Rahul",55000,502));
empManager.addEmployees(new employees(104,"Hadin",45000,501));
empManager.addEmployees(new employees(105,"Nandan",40000,502));

console.log(empManager.getEmployeesByDeptId(501));
console.log(empManager.getTotalSalaries(501));

console.log(empManager.getEmployeesByDeptId(502));
console.log(empManager.getTotalSalaries(502));







