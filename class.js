var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("Employee ID: " + this.id);
        console.log("Employee Name: " + this.name);
        console.log("Employee Salary: " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee(101, "Sandhya", 25000);
emp1.display();
