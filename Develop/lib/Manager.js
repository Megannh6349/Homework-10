// Pull in Employee class
const Employee = require("./Employee");
// Extend Employee class
class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
};

// Export
module.exports = Manager;