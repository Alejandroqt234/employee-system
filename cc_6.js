// Company class added

// Base class: Employee
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Subclass: Manager (inherits from Employee)
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // inherit properties
    this.teamSize = teamSize;
  }

  // override method
  describe() {
    return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} people.`;
  }
}

// Company class
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (const emp of this.employees) {
      console.log(emp.describe());
    }
  }
}

// Create employees and manager
const emp1 = new Employee("Alejandro", "Analytics");
const emp2 = new Employee("Sofia", "Marketing");
const manager1 = new Manager("Victor", "Engineering", 6);

// Create company and add them
const company = new Company();

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(manager1);

// Show output
console.log("---- Company Employees ----");
company.listEmployees();