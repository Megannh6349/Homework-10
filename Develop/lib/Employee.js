// Use Employee class as specified in README
class Employee {
    // Create constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //create methods to get information
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
};

// Export
module.exports = Employee;