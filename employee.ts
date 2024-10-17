//Create an employee object with fields like id(unique),name,email,pwd.

class employee{
    private static employeeIds: Set<number> = new Set();
    empId: number;
    empName: string;
    empEmail: string;

    constructor(id: number, name: string, email: string){
        this.validateId(id);
        this.validateEmail(email);
        

        this.empId=id;
        this.empName=name;
        this.empEmail=email;

        employee.employeeIds.add(id);
    }

    private validateId(id: number): void {
        if (employee.employeeIds.has(id)) {
            throw new Error(`Employee ID ${id} already exists.`);
        }
    }

    private validateEmail(email: string): void {
        if (!email.includes('@gmail.com')) {
            throw new Error(`Email ${email} must be a Gmail address.`);
        }
    }
}

let emp1 = new employee(101,"Akhil","akhil@gmail.com");
let emp2 = new employee(102,"Amal","amal@gmail.com");
console.log(emp1);
console.log(emp2);

