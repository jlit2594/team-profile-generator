class Employee {
    constructor(role = 'role') {
        this.role = role,
        this.name = name,
        this.id = Math.floor(Math.random() * 1000 + 9999),
        this.email = email
    }

    getRole() {
        if (role === 'Engineer') {
            return new Engineer(name, id, email)
        } else if (role === 'Intern') {
            return new Intern(name, id, email) 
        } else if (role === 'Manager') {
            return new Manager(name, id, email)
        } else {
            return new Employee(name, id, email)
        }
    }

    getName() {
        return `${name}`
    }
    
    getID() {
        return `${id}`
    }

    getEmail() {
        return `${email}`
    }
}