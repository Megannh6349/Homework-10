// Pull in Employee class
const Employee = require("./Employee");
// Extend Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
};

// Export
module.exports = Engineer;